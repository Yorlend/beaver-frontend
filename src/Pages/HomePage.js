import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";

class HomePage extends Component {
    render() {
        return (
            <Container fluid id="home">
                <div className="main-inner">
                    {/* Begin intro */}
                    <div className="section-bgc intro">
                        <div className="intro-slider">
                            <div className="intro-item" style={{ backgroundImage: 'url(assets/img/intro-img1.jpg)' }}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="intro-content">
                                                <div className="section-heading shm-none">
                                                    <div className="section-subheading">Web Beaver Data Marketplace</div>
                                                    <h1>The most beaverous <br /> Data Marketplace </h1>
                                                    <p className="section-desc">This is a marketplace for data engineers and data scientists.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>{/* End intro */}
                </div>
            </Container>
        );
    }
}

export default HomePage;
