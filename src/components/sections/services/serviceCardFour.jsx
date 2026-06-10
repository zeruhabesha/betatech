import React from 'react'
import { Link } from 'react-router-dom'
import { useSiteSettings } from '../../../context/siteSettings'

const ServiceCardFour = ({ id, link, service_name, service_details, }) => {
    const { t } = useSiteSettings()
    return (
        <div className="single-security-info">
            <div className="date">
                {id}
            </div>
            <h3>
                <Link className="text-decoration-none" to={link}>{t(service_name)}</Link>
            </h3>
            <p>{t(service_details)}</p>
            <Link className="read-more text-decoration-none" to={link}>
                {t("Read More")}
                <i className="ri-arrow-right-line"></i>
            </Link>
        </div>
    )
}

export default ServiceCardFour