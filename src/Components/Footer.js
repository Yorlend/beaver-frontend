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
    </footer>
}
