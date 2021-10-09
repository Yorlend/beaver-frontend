import React, {useEffect, useState} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import Photoset from "../Models/Photoset";

export default function PhotosetsPage() {

    const [photosets, setPhotosets] = useState(null);
    useEffect(() => {
        Photoset.list().then(setPhotosets);
    }, []);
    return (
        <Container className="models" id="models">
            <Row className="align-items-center">
                <Col xs={12} sm={6} lg={8}>
                    <h1 className="pt-4 pb-3">Фотосеты</h1>
                </Col>
                <Col xs={12} sm={6} lg={4}>
                    <Link to="/photoset/new" className="btn btn-primary"
                          id="new-photoset-btn">Создать
                    </Link>
                </Col>
            </Row>
            {photosets && photosets.length ?
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Идентификатор</th>
                        <th scope="col">Имя</th>
                    </tr>
                    </thead>
                    <tbody>
                    {photosets.map(item => (
                        <tr key={item.uuid}>
                            <th scope="row">{item.uuid}</th>
                            <td>
                                <Link to={"/photoset/" + item.uuid}>
                                    {item.name}
                                </Link>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table> : <div>
                    <p className="text-center text-muted p-5">Нет фотосетов</p>
                </div>}
        </Container>
    );
}
