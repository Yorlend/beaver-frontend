import React from "react";
import { Container, Card } from "react-bootstrap";

export default function DBCard(props) {
    return <a className="col-lg-4 col-md-6 col-12 item" style={{ width: '16rem' }}>
        <Card className="iitem">
            <Card.Img variant="top" src="/assets/img/database.svg" style={{width:"10rem"}} />
            <Card.Body>
                <Card.Title align="left">Database</Card.Title>
                <Card.Text align="left">
                    Some short description.
                </Card.Text>
            </Card.Body>
        </Card>
    </a>
}
