import React from 'react'
import { useSiteSettings } from '../../../context/siteSettings'

const TopBar = () => {
    const { t } = useSiteSettings()
    return (
        <div className="top-header-area top-bar">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <div className="top-header-content">
                            <ul className="list-unstyled ps-0 mb-0 list">
                                <li>
                                    <i className="ri-home-5-line"></i>
                                    {t("Welcome to Beta Tech Hub.")} <strong>{t("Need Help?")}</strong> <a href="mailto:info@betatechhub.com">{t("Get in Touch")}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="top-header-list text-end">
                            <ul className="list-unstyled ps-0 mb-0 list">
                                <li className="d-inline-block">
                                    <i className="ri-map-pin-line"></i>
                                    GARAMULETA Luxury Apartment, Wolo Sefer, Bole, Addis Ababa
                                </li>
                                <li className="d-inline-block">
                                    <i className="ri-mail-open-line"></i>
                                    <a className="text-decoration-none" href="mailto:info@betatechhub.com">info@betatechhub.com</a>
                                </li>
                                <li className="d-inline-block">
                                    <i className="ri-phone-line"></i>
                                    <a className="text-decoration-none" href="tel:+251909523769">+251 90 952 3769</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar