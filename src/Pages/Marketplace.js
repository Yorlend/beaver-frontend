import React, { Component, useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import DBCard from "../Components/DBCard";
import SearchBar from '../Components/SearchBar';
import DatasetList from '../Components/DatasetList';

const Marketplace = () => {
    const [input, setInput] = useState('');
    const [datasetListDefault, setDatasetListDefault] = useState([
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
        }
    ]);
    const [datasetList, setDatasetList] = useState();

    const fetchData = async () => {
        const data = [
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


        console.log(data)

        return await fetch('https://restcountries.eu/rest/v2/all')
            .then(response => response.json())
            .then(data => {
                setDatasetList(data)
                setDatasetListDefault(data)
            });
    }

    const updateInput = async (input) => {
        const filtered = datasetListDefault.filter(dataset => {
            return true;
            return dataset.name.toLowerCase().includes(input.toLowerCase())
        })
        setInput(input);
        setDatasetList(filtered);
    }

    useEffect(() => { fetchData() }, []);

    return <Container>
        <Row>
            <SearchBar keyword={input} setKeyword={updateInput} />
        </Row>
        <Row>
            {/* <DatasetList datasetList={datasetList} /> */}
            <DBCard />
            <DBCard />
            <DBCard />
            <DBCard />
            <DBCard />
            <DBCard />
            <DBCard />
            <DBCard />
            <DBCard />
        </Row>
    </Container>
}

export default Marketplace;