import React from 'react'
import { useSiteSettings } from '../../context/siteSettings'

const ContactInfo = () => {
    const { t } = useSiteSettings()
    return (
        <div className="contact-area pages-style pt-100 pb-75">
            <div className="container">
                <div className="row justify-content-center" data-cues="fadeIn">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-contact-card text-center">
                            <div className="icon">
                                <i className="ri-map-pin-line"></i>
                            </div>
                            <h3>{t("Our Address:")}</h3>
                            <p>GARAMULETA Luxury Apartment, Wolo Sefer, Bole, Addis Ababa, Ethiopia.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-contact-card text-center">
                            <div className="icon">
                                <i className="ri-phone-line"></i>
                            </div>
                            <h3>{t("Contact Info:")}</h3>
                            <ul className="list-unstyled ps-0 mb-0">
                                <li>
                                    <a className="text-decoration-none" href="tel:+251909523769">+251 90 952 3769</a>
                                </li>
                                <li>
                                    <a className="text-decoration-none" href="https://www.betatechhub.com">www.betatechhub.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-contact-card text-center">
                            <div className="icon">
                                <i className="ri-mail-open-line"></i>
                            </div>
                            <h3>{t("Email:")}</h3>
                            <ul className="list-unstyled ps-0 mb-0">
                                <li>
                                    <a className="text-decoration-none" href="mailto:info@betatechhub.com">info@betatechhub.com</a>
                                </li>
                                <li>
                                    <a className="text-decoration-none" href="mailto:zerihun@betatechhub.com">zerihun@betatechhub.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo