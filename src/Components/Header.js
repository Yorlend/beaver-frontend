import React, { Component } from 'react';
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div>
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
                </nav> {/* End mobile main menu */}
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
            </div>
        );
    }
}

export default Header;
