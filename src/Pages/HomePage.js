import React, {Component} from 'react';
import {Container, Row, Col} from "react-bootstrap";

class HomePage extends Component {
    render() {
        return (
            <Container fluid
                       id="home">
                <section className="py-5">
                    <Container>
                        <img
                            src="/icon.png"
                            height="300"
                            width="300"
                            alt="Logo"
                            id="home-logo"
                        />
                        <h1>Panoramici</h1>
                        <h2>Программно-аппаратный комплекс для получения и обработки изображений объекта с различных
                            ракурсов</h2>
                        <h3>Проект команды CopyBara</h3>
                    </Container>
                </section>
                <section className="py-5">
                    <Container>
                        <h2 className="mb-5">Состав команды</h2>
                        <Row>
                            <Col xs={12} sm={6} lg={4}>
                                <h4>Михаил Кормановский</h4>
                                <p>Team Lead, Backend Developer</p>
                            </Col>
                            <Col xs={12} sm={6} lg={4}>
                                <h4>Николай Артюхин</h4>
                                <p>Frontend Developer</p>
                            </Col>
                            <Col xs={12} sm={6} lg={4}>
                                <h4>Николай Козлов</h4>
                                <p>Backend Developer</p>
                            </Col>
                            <Col xs={12} sm={6} lg={4}>
                                <h4>Клим Корниенко</h4>
                                <p>DevOps Engineer</p>
                            </Col>
                            <Col xs={12} sm={6} lg={4}>
                                <h4>Никита Котляров</h4>
                                <p>Hardware Engineer</p>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="py-5">
                    <Container>
                        <h2 className="mb-5">Менторы</h2>
                        <Row>
                            <Col xs={12} sm={6}>
                                <h4>А. А. Зоткин</h4>
                            </Col>
                            <Col xs={12} sm={6}>
                                <h4>Н. С. Зоткина</h4>
                            </Col>
                        </Row>
                        <h2 className="my-5">Руководитель</h2>
                        <Row>
                            <Col xs={12} sm={6}>
                                <h4>А. А. Оленев</h4>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <section className="py-5">
                    <Container>
                        <h2 className="mb-5">Контакты</h2>
                        <Row>
                            <Col xs={12}>
                                <h4><a href="mailto:copybara2021@gmail.com">copybara2021@gmail.com</a></h4>
                                <p>Электронная почта</p>
                            </Col>
                            <Col xs={12}>
                                <h4>4893 4705 1778 5363</h4>
                                <p>Для донатов</p>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Container>
        );
    }
}

export default HomePage;
