import React from 'react'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import { slideUp } from '../../../utlits/slideUp'
import { zoomIn } from '../../../utlits/zoomIn'
import { servicesDataThree } from '../../../utlits/fackData/servicesDataThree'
import { useSiteSettings } from '../../../context/siteSettings'

const ServicesThree = () => {
    const { t } = useSiteSettings()
    return (
        <div className="services-area pb-75">
            <div className="container">
                <div className="services-title-area">
                    <motion.div className="row align-items-center"
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={slideUp(1)}
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        <div className="col-lg-6 col-md-7">
                            <div className="title">
                                <span className="d-block">{t("Our Services")}</span>
                                <h2>{t("What We Do for Your (SIEM) Security at Beta Tech Hub.")}</h2>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-5">
                            <div className="button">
                                <Link className="demo text-decoration-none" to="/service-details">{t("View All Services")}</Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div className="row" >
                    {
                        servicesDataThree.map(({ id, link, service_details, service_name, src }) => {
                            return (
                                <motion.div key={id} className="col-lg-3 col-sm-6"
                                    initial="offscreen"
                                    whileInView="onscreen"
                                    variants={zoomIn(id)}
                                    viewport={{ once: true, amount: 0.4 }}
                                >
                                    <div className="single-services-card">
                                        <div className="image">
                                            <Link to={link}>
                                                <img src={src} alt="services-image" />
                                            </Link>
                                        </div>
                                        <h3>
                                            <Link className="text-decoration-none" to="/service-details">{t(service_name)}</Link>
                                        </h3>
                                        <p>{t(service_details)}</p>
                                        <Link className="read-more text-decoration-none" to={link}>
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

export default ServicesThree