from get_json import process_dataset_request
import json

f = open('rules.json', 'r')
rules = json.load(f)
process_dataset_request("Sam", rules)