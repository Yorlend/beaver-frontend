import requests
import json

class DatahubExtractor:
    def __init__(self, lgn, pswrd):
        self.lgn = lgn
        self.pswrd = pswrd
        self.session = None

    def login(self):
        self.session = requests.Session()
        payload = {'username': self.lgn, 'password': self.pswrd}
        res = self.session.post('http://datahub.yc.pbd.ai:9002/logIn', json=payload)
        print(res.status_code)
        return self.session

    def database_search_query_former(self, search_query):
        query = """
        {
            search(input: { type: DATASET, query: 
            \"""" + \
            search_query + \
            """\" }) 
            {
            searchResults 
                {
                entity
                    {
                        type
                        ...on Dataset {
                            urn
                            name
                            type
                            schema
                            {
                                name
                                fields
                                {
                                    fieldPath
                                    description
                                    type
                                }
                            }
                        }
                    }
                }
            }
        }
        """
        
        res = self.session.post('http://datahub.yc.pbd.ai:9002/api/v2/graphql', json={'query': query})
        return res.json()

def get_datasets(req):
    datahubExtractor = DatahubExtractor("datahub", "datahub")
    datahubExtractor.login()
    return datahubExtractor.database_search_query_former(req)

'''
feature structure
name - parent dataset name
urn - parent dataset urn
description - description of the field
fieldPath - path to field
type - type of field
'''
def get_features(req):
    datahubExtractor = DatahubExtractor("datahub", "datahub")
    datahubExtractor.login()
    result = datahubExtractor.database_search_query_former(req)

    features = {}

    entities = result['data']['search']['searchResults']
    if entities != None:
        features = []
        for entity in entities:
            name = entity['entity']['name']
            urn = entity['entity']['urn']
            for field in entity['entity']['schema']['fields']:
                description = field['description']
                fieldPath = field['fieldPath']
                type = field['type']
                feature = {
                    "dataset_name": name,
                    "dataset_urn" : urn,
                    "description": description,
                    "fieldPath": fieldPath,
                    "type": type
                }
                features.append(feature)
        features_dict = {"features" : features}
    return features_dict

'''
Ввод пользователя - список словарей из запросов вида {имя фичи, urn датасета, действия}

Пример запросов
{
    rules[
        {

        }
    ]
}

rules format - правила показывающие, что и как нужно делать с датасетами, полученными на вход
Возможные действия с типами:
NUMBER - арифметические операции (ARITHM([оператор], [value])) причём value может быть другая фича, фильтр по значению (FILTER([условие]))
STRING - склеивание нескольких строк в одну (JOINSTR([value_1], [value_2], ... [value_n])), удаление слова из строки (DELETE([value])), поиск по строке (SEARCH[value])
DATE - поиск по дате (SEARCH([value])), операции с датой - добавление (ADD([value])) и вычитание дат (REMOVE([value])), фильтр по дате FILTER([условие])
BOOLEAN - сортировка по значению (FILTER([условие])), логические функции (LOGIC([func (AND, OR, NOT, XOR ...)], [value]))

Как выглядит формат rules:
Первая - словарь из пар фича - действие над фичей

'''

def process_dataset_request(req, rules):
    datahubExtractor = DatahubExtractor("datahub", "datahub")
    datahubExtractor.login()
    result_request = []
    features = get_features(req)
    for i in range(0, len(rules['rules'])):
        for j in range(0, len(features['features'])):
            if features['features'][j]['dataset_urn'] == rules['rules'][i]['dataset_urn'] and features['features'][j]['fieldPath'] == rules['rules'][i]['feat_name']:
                result_request.append(
                    {
                    "dataset_name":  features['features'][j]['dataset_name'],
                    "dataset_urn" :  features['features'][j]['dataset_urn'],
                    "description":  features['features'][j]['description'],
                    "fieldPath":  features['features'][j]['fieldPath'],
                    "type":  features['features'][j]['type'],
                    "action": rules['rules'][i]['action']
                    }
                )
    with open('data.json', 'w') as f:
        json.dump({"request": result_request}, f, sort_keys=True, indent=4)
