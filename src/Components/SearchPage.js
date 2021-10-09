import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import DatasetList from './DatasetList';

const SearchPage = (props) => {
    const [input, setInput] = useState('');
    const [datasetListDefault, setDatasetListDefault] = useState();
    const [datasetList, setDatasetList] = useState();
    
    setDatasetList({
        "datalist": [
            {
                name: "database1",
                descr: "descr1",
            },
            {
                name: "database2",
                descr: "descr2",
            },
            {
                name: "database3",
                descr: "descr3",
            },
            {
                name: "database4",
                descr: "descr4",
            },
        ]
    })

    setDatasetListDefault({
        "datalist": [
            {
                name: "database1",
                descr: "descr1",
            },
            {
                name: "database2",
                descr: "descr2",
            },
            {
                name: "database3",
                descr: "descr3",
            },
            {
                name: "database4",
                descr: "descr4",
            },
        ]
    })

    const fetchData = async () => {
        setDatasetList({
            "datalist": [
                {
                    name: "database1",
                    descr: "descr1",
                },
                {
                    name: "database2",
                    descr: "descr2",
                },
                {
                    name: "database3",
                    descr: "descr3",
                },
                {
                    name: "database4",
                    descr: "descr4",
                },
            ]
        })

        // return await fetch('https://restcountries.eu/rest/v2/all')
        //     .then(response => response.json())
        //     .then(data => {
        //         setDatasetList(data)
        //         setDatasetListDefault(data)
        //     });
    }

    const updateInput = async (input) => {
        console.log(input)
        const filtered = datasetListDefault.filter(dataset => {
            return dataset.name.toLowerCase().includes(input.toLowerCase())
        })
        setInput(input);
        setDatasetList(filtered);
    }

    useEffect(() => { fetchData() }, []);

    return <>
        <SearchBar input={input} onChange={updateInput} />
        <DatasetList datasetList={datasetList} />
    </>
}

export default SearchPage