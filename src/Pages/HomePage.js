import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";

class HomePage extends Component {
    render() {
        return (
            <Container fluid
                id="home">

                <div className="main-inner">
                    {/* Begin mobile main menu */}
                    <nav className="mmm">
                        <div className="mmm-content">
                            <ul className="mmm-list">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="about-us.html">About us</a></li>
                                <li><a href="services.html">Services</a></li>
                                <li><a href="typography.html">Typography</a></li>
                                <li><a href="tabs-and-accordions.html">Tabs &amp; Accordions</a></li>
                                <li><a href="news.html">News</a></li>
                                <li><a href="contact-us.html">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="mmm-footer">
                            <ul className="mmm-lang">
                                <li className="active"><a href="#!"><span>En</span></a></li>
                                <li><a href="#!"><span>Sp</span></a></li>
                                <li><a href="#!"><span>It</span></a></li>
                                <li><a href="#!"><span>Uk</span></a></li>
                                <li><a href="#!"><span>Ru</span></a></li>
                            </ul>
                        </div>
                    </nav>{/* End mobile main menu */}
                    <a className="bff d-none d-md-block" href="https://www.templatemonster.com/website-templates/pathsoft-it-solutions-for-your-business-services-website-template-83414.html">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="bff-container">
                                        <p>Get Full-Featured PathSoft Template</p>
                                        <div className="btn btn-border btn-small">
                                            <span>SHOP NOW</span>
                                            <svg className="btn-icon-right" viewBox="0 0 13 9" width={13} height={9}>
                                                <use xlinkHref="assets/img/sprite.svg#arrow-right" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                    {/* Begin header */}
                    <header className="header">
                        {/* Begin header top */}
                        <nav className="header-top">
                            <div className="container">
                                <div className="row align-items-center justify-content-between">
                                    <div className="col-auto">
                                        {/* Begin header top info */}
                                        <ul className="header-top-info">
                                            <li>
                                                <a href="mailto:mail@example.com">
                                                    <i className="material-icons md-18">mail_outline</i>
                                                    <span>mail@example.com</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="mailto:mail@example.com" className="formingHrefTel">
                                                    <i className="material-icons md-18">phone_in_talk</i>
                                                    <span>+1-888-777-1234</span>
                                                </a>
                                            </li>
                                        </ul>{/* Ennd header top info */}
                                    </div>
                                    <div className="col-auto">
                                        <div className="header-top-links">
                                            {/* Begin social links */}
                                            <ul className="social-links">
                                                <li>
                                                    <a href="#!" title="Facebook">
                                                        <svg viewBox="0 0 320 512">
                                                            <use xlinkHref="assets/img/sprite.svg#facebook-icon" />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#!" title="Instagram">
                                                        <svg viewBox="0 0 448 512">
                                                            <use xlinkHref="assets/img/sprite.svg#instagram-icon" />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#!" title="LinkedIn">
                                                        <svg viewBox="0 0 448 512">
                                                            <use xlinkHref="assets/img/sprite.svg#linkedin-icon" />
                                                        </svg>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#!" title="Twitter">
                                                        <svg viewBox="0 0 512 512">
                                                            <use xlinkHref="assets/img/sprite.svg#twitter-icon" />
                                                        </svg>
                                                    </a>
                                                </li>
                                            </ul>{/* End social links */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>{/* End header top */}
                        {/* Begin header fixed */}
                        <nav className="header-fixed">
                            <div className="container">
                                <div className="row flex-nowrap align-items-center justify-content-between">
                                    <div className="col-auto d-block d-lg-none header-fixed-col">
                                        <div className="main-mnu-btn">
                                            <span className="bar bar-1" />
                                            <span className="bar bar-2" />
                                            <span className="bar bar-3" />
                                            <span className="bar bar-4" />
                                        </div>
                                    </div>
                                    <div className="col-auto header-fixed-col">
                                        {/* Begin logo */}
                                        <a href="/" className="logo" title="PathSoft">
                                            <img src="assets/img/logo.svg" alt="PathSoft" width={115} height={36} />
                                        </a>{/* End logo */}
                                    </div>
                                    <div className="col-auto header-fixed-col d-none d-lg-block col-static">
                                        {/* Begin main menu */}
                                        <nav className="main-mnu">
                                            <ul className="main-mnu-list">
                                                <li><a href="index.html" data-title="Home"><span>Home</span></a></li>
                                                <li><a href="about-us.html" data-title="About us"><span>About us</span></a></li>
                                                <li><a href="services.html" data-title="Services"><span>Services</span></a></li>
                                                <li><a href="typography.html" data-title="Typography"><span>Typography</span></a></li>
                                                <li><a href="tabs-and-accordions.html" data-title="Tabs & Accordions"><span>Tabs
                                                    &amp; Accordions</span></a></li>
                                                <li><a href="news.html" data-title="News"><span>News</span></a></li>
                                                <li><a href="contact-us.html" data-title="Contact Us"><span>Contact
                                                    Us</span></a></li>
                                            </ul>
                                        </nav>{/* End main menu */}
                                    </div>
                                    <div className="col-auto header-fixed-col col-static">
                                        {/* Begin header actions */}
                                        <ul className="header-actions">
                                            {/* Begin header languarge */}
                                            <li className="d-none d-lg-block">
                                                <div className="header-lang">
                                                    <div className="header-lang-current"><i className="material-icons md-22">language</i></div>
                                                    <ul className="header-lang-list">
                                                        <li className="active"><a href="#!" className="hover-link" data-lang="En" data-title="English"><span>English</span></a></li>
                                                        <li><a href="#!" className="hover-link" data-lang="Sp" data-title="Spanish"><span>Spanish</span></a></li>
                                                        <li><a href="#!" className="hover-link" data-lang="It" data-title="Italian"><span>Italian</span></a></li>
                                                        <li><a href="#!" className="hover-link" data-lang="Uk" data-title="Ukraine"><span>Ukraine</span></a></li>
                                                        <li><a href="#!" className="hover-link" data-lang="Ru" data-title="Russian"><span>Russian</span></a></li>
                                                    </ul>
                                                </div>
                                            </li>{/* End header languarge */}
                                            {/* Begin header navbar */}
                                            <li className="d-block d-lg-none">
                                                <div className="header-navbar">
                                                    <div className="header-navbar-btn">
                                                        <i className="material-icons md-24">more_vert</i>
                                                    </div>
                                                    <ul className="header-navbar-content">
                                                        <li>
                                                            <a href="mailto:mail@example.com">
                                                                <i className="material-icons md-20">mail_outline</i>
                                                                <span>mail@example.com</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="mailto:mail@example.com" className="formingHrefTel">
                                                                <i className="material-icons md-20">support_agent</i>
                                                                <span>1-888-777-1234</span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            {/* Begin social links */}
                                                            <ul className="social-links">
                                                                <li>
                                                                    <a href="#!" title="Facebook">
                                                                        <svg viewBox="0 0 320 512">
                                                                            <use xlinkHref="assets/img/sprite.svg#facebook-icon">
                                                                            </use>
                                                                        </svg>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#!" title="Instagram">
                                                                        <svg viewBox="0 0 448 512">
                                                                            <use xlinkHref="assets/img/sprite.svg#instagram-icon">
                                                                            </use>
                                                                        </svg>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#!" title="LinkedIn">
                                                                        <svg viewBox="0 0 448 512">
                                                                            <use xlinkHref="assets/img/sprite.svg#linkedin-icon">
                                                                            </use>
                                                                        </svg>
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href="#!" title="Twitter">
                                                                        <svg viewBox="0 0 512 512">
                                                                            <use xlinkHref="assets/img/sprite.svg#twitter-icon">
                                                                            </use>
                                                                        </svg>
                                                                    </a>
                                                                </li>
                                                            </ul>{/* End social links */}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>{/* End header navbar */}
                                        </ul>{/* End header actions */}
                                    </div>
                                </div>
                            </div>
                        </nav>{/* End header fixed */}
                    </header>{/* End header */}
                    {/* Begin intro */}
                    <div className="section-bgc intro">
                        <div className="intro-slider">
                            <div className="intro-item" style={{ backgroundImage: 'url(assets/img/intro-img1.jpg)' }}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="intro-content">
                                                <div className="section-heading shm-none">
                                                    <div className="section-subheading">Free template</div>
                                                    <h1>The Fastest <br /> HTML5 Template</h1>
                                                    <p className="section-desc">Hi my friend. This free template is the simplified
                                                        version of the premium template, but you can use it for your own
                                                        purposes. The premium template includes a lot of functionality and much
                                                        more.</p>
                                                </div>
                                                <div className="wrap-btn intro-btns">
                                                    <a href="https://www.templatemonster.com/website-templates/pathsoft-it-solutions-for-your-business-services-website-template-83414.html" className="btn btn-with-icon btn-small ripple">
                                                        <span>Buy premium</span>
                                                        <svg className="btn-icon-right" viewBox="0 0 13 9" width={13} height={9}>
                                                            <use xlinkHref="assets/img/sprite.svg#arrow-right" />
                                                        </svg>
                                                    </a>
                                                    <a href="contact-us.html" className="btn btn-with-icon btn-border btn-small ripple">
                                                        <span>Get in Touch</span>
                                                        <svg className="btn-icon-right" viewBox="0 0 13 9" width={13} height={9}>
                                                            <use xlinkHref="assets/img/sprite.svg#arrow-right" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>{/* End intro */}
                    {/* Begin services */}
                    <section className="section services">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="section-heading heading-center">
                                        <div className="section-subheading">Areas what we serv</div>
                                        <h2>Our Services</h2>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12 item">
                                    <a href="single-services.html" className="iitem item-style">
                                        <div className="iitem-icon">
                                            <i className="material-icons material-icons-outlined md-48">corporate_fare</i>
                                        </div>
                                        <div className="iitem-icon-bg">
                                            <i className="material-icons material-icons-outlined">corporate_fare</i>
                                        </div>
                                        <h3 className="iitem-heading item-heading-large">Corporate Solution</h3>
                                        <div className="iitem-desc">Contrary to popular belief, Lorem Ipsum is not simply random
                                            text. It has roots in a piece of classical Latin literature from 45 BC, making it
                                            over 2000 years old.</div>
                                    </a>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12 item">
                                    <a href="single-services.html" className="iitem item-style">
                                        <div className="iitem-icon">
                                            <i className="material-icons material-icons-outlined md-48">support_agent</i>
                                        </div>
                                        <div className="iitem-icon-bg">
                                            <i className="material-icons material-icons-outlined">support_agent</i>
                                        </div>
                                        <h3 className="iitem-heading item-heading-large">Call Center Solutions</h3>
                                        <div className="iitem-desc">Contrary to popular belief, Lorem Ipsum is not simply random
                                            text. It has roots in a piece of classical Latin literature from 45 BC, making it.
                                        </div>
                                    </a>
                                </div>
                                <div className="col-lg-4 col-md-12 col-12 item">
                                    <a href="single-services.html" className="iitem item-style">
                                        <div className="iitem-icon">
                                            <i className="material-icons material-icons-outlined md-48">cloud_download</i>
                                        </div>
                                        <div className="iitem-icon-bg">
                                            <i className="material-icons material-icons-outlined">cloud_download</i>
                                        </div>
                                        <h3 className="iitem-heading item-heading-large">Cloud Development</h3>
                                        <div className="iitem-desc">There are many variations of passages of Lorem Ipsum available,
                                            but the majority have suffered alteration in some form, by injected humour, or
                                            randomised words.</div>
                                    </a>
                                </div>
                                <div className="col-12">
                                    <div className="section-btns justify-content-center">
                                        <a href="services.html" className="btn btn-with-icon btn-w240 ripple">
                                            <span>See All Services</span>
                                            <svg className="btn-icon-right" viewBox="0 0 13 9" width={13} height={9}>
                                                <use xlinkHref="assets/img/sprite.svg#arrow-right" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>{/* End services */}
                    {/* Begin advantages */}
                    <section className="section section-bgc">
                        <div className="container">
                            <div className="row items">
                                <div className="col-12">
                                    <div className="section-heading heading-center">
                                        <div className="section-subheading">some reasons</div>
                                        <h2>Why Choose Us</h2>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12 item">
                                    <div className="ini">
                                        <div className="ini-count">01</div>
                                        <div className="ini-info">
                                            <h3 className="ini-heading item-heading-large">High Quality Hardware</h3>
                                            <div className="ini-desc">
                                                <p>We use top-notch hardware to develop the most efficient apps for our
                                                    customers</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12 item">
                                    <div className="ini">
                                        <div className="ini-count">02</div>
                                        <div className="ini-info">
                                            <h3 className="ini-heading item-heading-large">Dedicated 24\7 Support</h3>
                                            <div className="ini-desc">
                                                <p>You can rely on our 24/7 tech support that will gladly solve any app issue
                                                    you may have.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12 item">
                                    <div className="ini">
                                        <div className="ini-count">03</div>
                                        <div className="ini-info">
                                            <h3 className="ini-heading item-heading-large">30-Day Money-back Guarantee</h3>
                                            <div className="ini-desc">
                                                <p>If you are not satisfied with our apps, we will return your money in the
                                                    first 30 days.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12 item">
                                    <div className="ini">
                                        <div className="ini-count">04</div>
                                        <div className="ini-info">
                                            <h3 className="ini-heading item-heading-large">Agile and Fast Working Style</h3>
                                            <div className="ini-desc">
                                                <p>This type of approach to our work helps our specialists to quickly develop
                                                    better apps.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12 item">
                                    <div className="ini">
                                        <div className="ini-count">05</div>
                                        <div className="ini-info">
                                            <h3 className="ini-heading item-heading-large">Some Apps <br /> are Free</h3>
                                            <div className="ini-desc">
                                                <p>We also develop free apps that can be downloaded online without any payments.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12 item">
                                    <div className="ini">
                                        <div className="ini-count">06</div>
                                        <div className="ini-info">
                                            <h3 className="ini-heading item-heading-large">High Level of Usability</h3>
                                            <div className="ini-desc">
                                                <p>All our products have high usability allowing users to easily operate the
                                                    apps.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>{/* End advantages */}
                    {/* Begin counter section */}
                    <section className="section">
                        <div className="container">
                            <div className="row spincrement-container">
                                <div className="col-xl-5 offset-xl-2 col-lg-6 offset-lg-1 col-12">
                                    <div className="main-counter">
                                        <div className="main-counter-item">
                                            <div className="main-counter-item-center">
                                                <div>
                                                    <div className="main-counter-numb spincrement" data-from={0} data-to={10}>0
                                                    </div>
                                                    <div className="main-counter-heading">Years <br /> Of Experience</div>
                                                </div>
                                            </div>
                                            <div className="main-counter-item-circ" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 offset-xl-1 col-lg-3 offset-lg-1 col-12 counter-items items">
                                    <div className="counter-item item">
                                        <div className="counter-item-numb"><span className="spincrement" data-from={0} data-to={2}>0</span>K</div>
                                        <p className="counter-item-heading">Аpps Developed</p>
                                    </div>
                                    <div className="counter-item item">
                                        <div className="counter-item-numb spincrement" data-from={0} data-to={40}>0</div>
                                        <p className="counter-item-heading">Consultans</p>
                                    </div>
                                    <div className="counter-item item">
                                        <div className="counter-item-numb spincrement" data-from={0} data-to={160}>0</div>
                                        <p className="counter-item-heading">Employers</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>{/* End counter section */}
                    <div className="section section-bgc">
                        <div className="container">
                            <div className="row items">
                                <div className="col-12">
                                    <div className="section-heading heading-center">
                                        <div className="section-subheading">Our prices</div>
                                        <h1>Pricing</h1>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12 item">
                                    {/* Begin pricing item */}
                                    <div className="pricing-item item-style">
                                        <header className="pricing-item-header">
                                            <div className="pricing-item-heading">Basic</div>
                                            <div className="pricing-item-price"><small>from</small> 899$</div>
                                        </header>
                                        <div className="pricing-item-h">
                                            <div className="pricing-item-content">
                                                <ul className="pricing-item-list">
                                                    <li className="active">
                                                        <i className="material-icons md-24">check</i>
                                                        Concept development
                                                    </li>
                                                    <li className="active">
                                                        <i className="material-icons md-24">check</i>
                                                        UI/UX design
                                                    </li>
                                                    <li>
                                                        <i className="material-icons md-24">check</i>
                                                        Configuration management
                                                    </li>
                                                    <li>
                                                        <i className="material-icons md-24">check</i>
                                                        Software quality assurance
                                                    </li>
                                                    <li>
                                                        <i className="material-icons md-24">check</i>
                                                        App integration
                                                    </li>
                                                </ul>
                                            </div>
                                            <footer className="pricing-item-footer">
                                                <a href="#!" className="btn btn-large btn-with-icon btn-wide ripple">
                                                    <span>Get Starter</span>
                                                    <svg className="btn-icon-right" viewBox="0 0 13 9" width={13} height={9}>
                                                        <use xlinkHref="assets/img/sprite.svg#arrow-right" />
                                                    </svg>
                                                </a>
                                            </footer>
                                        </div>
                                    </div>{/* End pricing item */}
                                </div>
                                <div className="col-lg-4 col-md-6 col-12 item">
                                    {/* Begin pricing item */}
                                    <div className="pricing-item item-style">
                                        <div className="pricing-item-badge">Popular</div>
                                        <header className="pricing-item-header">
                                            <div className="pricing-item-heading">Optimal</div>
                                            <div className="pricing-item-price"><small>from</small> 1 500$</div>
                                        </header>
                                        <div className="pricing-item-h">
                                            <div className="pricing-item-content">
                                                <ul className="pricing-item-list">
                                                    <li className="active">
                                                        <i className="material-icons md-24">check</i>
                                                        Concept development
                                                    </li>
                                                    <li className="active">
                                                        <i className="material-icons md-24">check</i>
                                                        UI/UX design
                                                    </li>
                                                    <li className="active">
                                                        <i className="material-icons md-24">check</i>
                                                        Configuration management
                                                    </li>
                                                    <li>
                                                        <i className="material-icons md-24">check</i>
                                                        Software quality assurance
                                                    </li>
                                                    <li>
                                                        <i className="material-icons md-24">check</i>
                                                        App integration
                                                    </li>
                                                </ul>
                                            </div>
                                            <footer className="pricing-item-footer">
                                                <a href="#!" className="btn btn-border btn-large btn-with-icon btn-wide ripple">
                                                    <span>Get Starter</span>
                                                    <svg className="btn-icon-right" viewBox="0 0 13 9" width={13} height={9}>
                                                        <use xlinkHref="assets/img/sprite.svg#arrow-right" />
                                                    </svg>
                                                </a>
                                            </footer>
                                        </div>
                                    </div>{/* End pricing item */}
                                </div>
                                <div className="col-lg-4 col-md-12 col-12 item">
                                    {/* Begin pricing item */}
                                    <div className="pricing-item item-style">
                                        <header className="pricing-item-header">
                                            <div className="pricing-item-heading">Ultimate</div>
                                            <div className="pricing-item-price"><small>from</small> 2 000$</div>
                                        </header>
                                        <div className="pricing-item-h">
                                            <div className="pricing-item-content">
                                                <ul className="pricing-item-list">
                                                    <li className="active">
                                                        <i className="material-icons md-24">check</i>
                                                        Concept development
                                                    </li>
                                                    <li className="active">
                                                        <i className="material-icons md-24">check</i>
                                                        UI/UX design
                                                    </li>
                                                    <li className="active">
                                                        <i className="material-icons md-24">check</i>
                                                        Configuration management
                                                    </li>
                                                    <li className="active">
                                                        <i className="material-icons md-24">check</i>
                                                        Software quality assurance
                                                    </li>
                                                    <li className="active">
                                                        <i className="material-icons md-24">check</i>
                                                        App integration
                                                    </li>
                                                    <li className="active">
                                                        <i className="material-icons md-24">check</i>
                                                        Custom settings
                                                    </li>
                                                </ul>
                                            </div>
                                            <footer className="pricing-item-footer">
                                                <a href="#!" className="btn btn-large btn-with-icon btn-wide ripple">
                                                    <span>Get Starter</span>
                                                    <svg className="btn-icon-right" viewBox="0 0 13 9" width={13} height={9}>
                                                        <use xlinkHref="assets/img/sprite.svg#arrow-right" />
                                                    </svg>
                                                </a>
                                            </footer>
                                        </div>
                                    </div>{/* End pricing item */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Begin reviews */}
                    <section className="section">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="section-heading heading-center">
                                        <div className="section-subheading">Reviews from our clients</div>
                                        <h2>What People Say</h2>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12 item">
                                    {/* Begin reviews item */}
                                    <div className="reviews-item item-style">
                                        <div className="reviews-item-header">
                                            <div className="reviews-item-img">
                                                <img data-src="assets/img/auth-img-1.jpg" className="lazy" src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" alt="" />
                                            </div>
                                            <div className="reviews-item-info">
                                                <h4 className="reviews-item-name item-heading">Catherine Williams</h4>
                                                <div className="reviews-item-position">Regular client</div>
                                            </div>
                                        </div>
                                        <div className="reviews-item-text">
                                            <p>PathSoft offers a high caliber of resources skilled in Microsoft Azure.NET,
                                                mobile and Quality Assurance. They became our true business partners over the
                                                past three years.</p>
                                        </div>
                                    </div>{/* End reviews item */}
                                </div>
                                <div className="col-lg-4 col-md-6 col-12 item">
                                    {/* Begin reviews item */}
                                    <div className="reviews-item item-style">
                                        <div className="reviews-item-header">
                                            <div className="reviews-item-img">
                                                <img data-src="assets/img/auth-img-2.jpg" className="lazy" src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" alt="" />
                                            </div>
                                            <div className="reviews-item-info">
                                                <h4 className="reviews-item-name item-heading">Rupert Wood</h4>
                                                <div className="reviews-item-position">Regular client</div>
                                            </div>
                                        </div>
                                        <div className="reviews-item-text">
                                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit consequuntur
                                                sequi eos beatae deleniti culpa cupiditate rerum. Similique, blanditiis rem
                                                perspiciatis fugiat voluptatem quas officiis ducimus reprehenderit.</p>
                                        </div>
                                    </div>{/* End reviews item */}
                                </div>
                                <div className="col-lg-4 col-md-12 col-12 item">
                                    {/* Begin reviews item */}
                                    <div className="reviews-item item-style">
                                        <div className="reviews-item-header">
                                            <div className="reviews-item-img">
                                                <img data-src="assets/img/auth-img-3.jpg" className="lazy" src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" alt="" />
                                            </div>
                                            <div className="reviews-item-info">
                                                <h4 className="reviews-item-name item-heading">Samantha Brown</h4>
                                                <div className="reviews-item-position">Regular client</div>
                                            </div>
                                        </div>
                                        <div className="reviews-item-text">
                                            <p>We sincerely hope that each and every user entering our website will find
                                                exactly. With advanced features of activating account and new login widgets, you
                                                will definitely have a great experience of using our web page.</p>
                                        </div>
                                    </div>{/* End reviews item */}
                                </div>
                            </div>
                        </div>
                    </section>{/* End reviews */}
                    {/* Begin latest news */}
                    <section className="section section-bgc">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="section-heading heading-center">
                                        <div className="section-subheading">More info about</div>
                                        <h2>Latest News</h2>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-12 item">
                                    {/* Begin news item */}
                                    <article className="news-item item-style">
                                        <a href="news-post.html" className="news-item-img">
                                            <img data-src="assets/img/news-img-1.jpg" className="lazy" src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" alt="" />
                                        </a>
                                        <div className="news-item-info">
                                            <div className="news-item-date">07/01/2021</div>
                                            <h3 className="news-item-heading item-heading">
                                                <a href="news-post.html" title="Benefits Of Async/Await">Benefits Of
                                                    Async/Await</a>
                                            </h3>
                                            <div className="news-item-desc">
                                                <p>Asynchronous functions are a good and bad thing in JavaScript.</p>
                                            </div>
                                        </div>
                                    </article>{/* End news item */}
                                </div>
                                <div className="col-lg-4 col-md-6 col-12 item">
                                    {/* Begin news item */}
                                    <article className="news-item item-style">
                                        <a href="news-post.html" className="news-item-img">
                                            <img data-src="assets/img/news-img-2.jpg" className="lazy" src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" alt="" />
                                        </a>
                                        <div className="news-item-info">
                                            <div className="news-item-date">05/01/2021</div>
                                            <h3 className="news-item-heading item-heading">
                                                <a href="news-post.html" title="Key Considerations Of IPaaS">Key Considerations
                                                    Of IPaaS</a>
                                            </h3>
                                            <div className="news-item-desc">
                                                <p>Digital transformation requires cloud appropriate adoption</p>
                                            </div>
                                        </div>
                                    </article>{/* End news item */}
                                </div>
                                <div className="col-lg-4 col-md-6 col-12 item">
                                    {/* Begin news item */}
                                    <article className="news-item item-style">
                                        <a href="news-post.html" className="news-item-img">
                                            <img data-src="assets/img/news-img-3.jpg" className="lazy" src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" alt="" />
                                        </a>
                                        <div className="news-item-info">
                                            <div className="news-item-date">01/01/2021</div>
                                            <h3 className="news-item-heading item-heading">
                                                <a href="news-post.html" title="Hibernate Query Language">Hibernate Query
                                                    Language</a>
                                            </h3>
                                            <div className="news-item-desc">
                                                <p>In this tutorial, we will discuss the Hibernate Query Language. </p>
                                            </div>
                                        </div>
                                    </article>{/* End news item */}
                                </div>
                                <div className="col-12">
                                    <div className="section-btns justify-content-center">
                                        <a href="news.html" className="btn btn-with-icon btn-w240 ripple">
                                            <span>See All News</span>
                                            <svg className="btn-icon-right" viewBox="0 0 13 9" width={13} height={9}>
                                                <use xlinkHref="assets/img/sprite.svg#arrow-right" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>{/* End latest news */}
                </div>
                <a className="bff d-none d-md-block" href="https://www.templatemonster.com/website-templates/pathsoft-it-solutions-for-your-business-services-website-template-83414.html">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="bff-container">
                                    <p>Get Full-Featured PathSoft Template</p>
                                    <div className="btn btn-border btn-small">
                                        <span>VIEW NOW</span>
                                        <svg className="btn-icon-right" viewBox="0 0 13 9" width={13} height={9}>
                                            <use xlinkHref="assets/img/sprite.svg#arrow-right" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
                {/* Begin footer */}
                <footer className="footer">
                    <div className="footer-main">
                        <div className="container">
                            <div className="row items">
                                <div className="col-xl-3 col-lg-3 col-md-5 col-12 item">
                                    {/* Begin company info */}
                                    <div className="footer-company-info">
                                        <div className="footer-company-top">
                                            <a href="/" className="logo" title="PathSoft">
                                                <img data-src="assets/img/logo-white.svg" className="lazy" src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" alt="PathSoft" width={115} height={36} />
                                            </a>
                                            <div className="footer-company-desc">
                                                <p>Our company has been developing high-quality and reliable software for
                                                    corporate needs since 2008. We are renowned professionals of software
                                                    development.</p>
                                            </div>
                                        </div>
                                        <ul className="footer-social-links">
                                            <li>
                                                <a href="#!" title="Facebook">
                                                    <svg viewBox="0 0 320 512">
                                                        <use xlinkHref="assets/img/sprite.svg#facebook-icon" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!" title="Instagram">
                                                    <svg viewBox="0 0 448 512">
                                                        <use xlinkHref="assets/img/sprite.svg#instagram-icon" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!" title="LinkedIn">
                                                    <svg viewBox="0 0 448 512">
                                                        <use xlinkHref="assets/img/sprite.svg#linkedin-icon" />
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#!" title="Twitter">
                                                    <svg viewBox="0 0 512 512">
                                                        <use xlinkHref="assets/img/sprite.svg#twitter-icon" />
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* End company info */}
                                </div>
                                <div className="col-xl-2 offset-xl-1 col-md-3 col-5 col-lg-2 item">
                                    <div className="footer-item">
                                        <p className="footer-item-heading">Menu</p>
                                        <nav className="footer-nav">
                                            <ul className="footer-mnu">
                                                <li><a href="about-us.html" className="hover-link" data-title="About Us"><span>About
                                                    Us</span></a></li>
                                                <li><a href="services.html" className="hover-link" data-title="Services"><span>Services</span></a></li>
                                                <li><a href="typography.html" data-title="Typography"><span>Typography</span></a></li>
                                                <li><a href="news.html" className="hover-link" data-title="News"><span>News</span></a></li>
                                                <li><a href="contact-us.html" className="hover-link" data-title="Contact Us"><span>Contact Us</span></a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-3 col-7 item">
                                    <div className="footer-item">
                                        <p className="footer-item-heading">What We Offer</p>
                                        <nav className="footer-nav">
                                            <ul className="footer-mnu">
                                                <li><a href="#!" className="hover-link" data-title="DB Management"><span>DB
                                                    Management</span></a></li>
                                                <li><a href="#!" className="hover-link" data-title="IOS/MacOS"><span>IOS/MacOS</span></a></li>
                                                <li><a href="#!" className="hover-link" data-title="Android Apps"><span>Android
                                                    Apps</span></a></li>
                                                <li><a href="#!" className="hover-link" data-title="Windows Apps"><span>Windows
                                                    Apps</span></a></li>
                                                <li><a href="#!" className="hover-link" data-title="UX & UI"><span>UX &amp;
                                                    UI</span></a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-xs-4 col-lg-4 col-12 item">
                                    <div className="footer-item">
                                        <p className="footer-item-heading">Our contacts</p>
                                        <ul className="footer-contacts">
                                            <li>
                                                <i className="material-icons md-22">location_on</i>
                                                <div className="footer-contact-info">
                                                    301 S Irving Blvd Los Angeles, CA 90020
                                                </div>
                                            </li>
                                            <li>
                                                <i className="material-icons md-22 footer-contact-tel">smartphone</i>
                                                <div className="footer-contact-info">
                                                    <a href="#!" className="formingHrefTel">+1 323-913-4688</a>, <a href="#!" className="formingHrefTel">+1 323-888-4554</a>
                                                </div>
                                            </li>
                                            <li>
                                                <i className="material-icons md-22 footer-contact-email">email</i>
                                                <div className="footer-contact-info">
                                                    <a href="mailto:mail@example.com">mail@example.com</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="footer-item">
                                        <p className="footer-item-heading">Subscribe</p>
                                        <form action="#!" method="post" className="footer-subscribe">
                                            <div className="form-field">
                                                <label htmlFor="subscribe-email" className="form-field-label">Your email</label>
                                                <input type="email" className="form-field-input" name="Subscribe_email" defaultValue autoComplete="off" required="required" id="subscribe-email" />
                                            </div>
                                            <div className="form-btn">
                                                <button type="submit" className="btn ripple"><span>Subscribe</span></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="container">
                            <div className="row justify-content-between items">
                                <div className="col-md-auto col-12 item">
                                    <nav className="footer-links">
                                        <ul>
                                            <li><a href="terms-and-conditions.html">Terms and Conditions</a></li>
                                            <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="col-md-auto col-12 item">
                                    <div className="copyright">© 2021 PathSoft. All rights reserved.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>{/* End footer */}
            </Container>
        );
    }
}

export default HomePage;
