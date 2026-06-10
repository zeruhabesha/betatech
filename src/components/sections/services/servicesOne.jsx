import React from 'react'
import {motion} from "framer-motion"
import { Link } from 'react-router-dom'

import { zoomIn } from '../../../utlits/zoomIn'
import Title from '../../common/title'
import { servicesDataOne } from '../../../utlits/fackData/servicesDataOne'
import ServiceIconSeven from '../../../assets/icons/serviceIconSeven'
import { useSiteSettings } from '../../../context/siteSettings'


const ServicesOne = () => {
    const { t } = useSiteSettings()
    return (
        <div className="services-area style-2 pb-75">
            <div className="container">
                <Title sectionName={"Our Services"} sectionTitle={"Advanced Security. Proactive Compliance. Resilient Operations."} style={"style-2"}/>
                <div className="row" >
                    {
                        servicesDataOne.map(({ id, link, service_details, service_name, src }) => {
                            return (
                                <motion.div key={id} className="col-lg-4 col-sm-6"
                                    initial="offscreen"
                                    whileInView="onscreen"
                                    variants={zoomIn(id)}
                                    viewport={{ once: true, amount: 0.4 }}
                                >
                                    <div className="single-services-info">
                                        <div className="icon">
                                            {src()}
                                        </div>
                                        <h3>
                                            <Link className="text-decoration-none" href={link}>{t(service_name)}</Link>
                                        </h3>
                                        <p>{t(service_details)}</p>
                                        <Link className="read-more text-decoration-none" href={link}>
                                            {t("Read More")}
                                            <i className="ri-arrow-right-line"></i>
                                        </Link>
                                    </div>
                                </motion.div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ServicesOne