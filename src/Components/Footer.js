import React from "react";
import { Container } from "react-bootstrap";

export default function Footer() {
    return <footer className="footer">
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
                                    <p>Компания Web Beavers - на рынке с 2021 года.</p>
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
                            <p className="footer-item-heading">Меню</p>
                            <nav className="footer-nav">
                                <ul className="footer-mnu">
                                    <li><a href="about-us.html" className="hover-link" data-title="О нас"><span>О нас</span></a></li>
                                    <li><a href="services.html" className="hover-link" data-title="Услуги"><span>Услуги</span></a></li>
                                    <li><a href="contact-us.html" className="hover-link" data-title="Обратная связь"><span>Обратная связь</span></a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-3 col-7 item">
                        <div className="footer-item">
                            <p className="footer-item-heading">Услуги</p>
                            <nav className="footer-nav">
                                <ul className="footer-mnu">
                                    <li><a href="#!" className="hover-link" data-title="Поиск баз данных"><span>Поиск баз данных</span></a></li>
                                    <li><a href="#!" className="hover-link" data-title="Задания"><span>Задания</span></a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="col-xs-4 col-lg-4 col-12 item">
                        <div className="footer-item">
                            <p className="footer-item-heading">Наши контакты</p>
                            <ul className="footer-contacts">
                                <li>
                                    <i className="material-icons md-22">location_on</i>
                                    <div className="footer-contact-info">
                                        Москва, 2-я Бауманская улица, д. 5, стр. 1
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
                                        <a href="mailto:mail@example.com">web@beavers.com</a>
                                    </div>
                                </li>
                            </ul>
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
                        <div className="copyright">© 2021 Web Beavers. All rights reserved.</div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
}
