import React from 'react'
import { motion } from "framer-motion"
import choose_imag_1 from "../../assets/images/choose/choose-1.png"
import choose_imag_2 from "../../assets/images/choose/choose-2.jpg"
import { Link } from 'react-router-dom'
import { slideUp } from '../../utlits/slideUp'
import { useSiteSettings } from '../../context/siteSettings'

const ChooseUs = () => {
    const { t } = useSiteSettings()
    return (
        <div className="choose-area pt-100 pb-75">
            <div className="container">
                <motion.div className="row"
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={slideUp(1)}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <div className="col-lg-6">
                        <div className="choose-content">
                            <div className="title">
                                <span className="d-block">{t("Why Choose Us?")}</span>
                                <h2>{t("Compliance Transformed into Strategic Competitive Advantage.")}</h2>
                            </div>
                            <div className="choose-value">
                                <i className="ri-check-double-fill"></i>
                                <span>{t("End-to-end service delivery — strategy to implementation and monitoring")}</span>
                            </div>
                            <div className="choose-value">
                                <i className="ri-check-double-fill"></i>
                                <span>{t("Proven experience across public, finance, defense and telecom sectors")}</span>
                            </div>
                            <div className="choose-value">
                                <i className="ri-check-double-fill"></i>
                                <span>{t("Aligning national directives with international best practices")}</span>
                            </div>
                            <div className="choose-value">
                                <i className="ri-check-double-fill"></i>
                                <span>{t("Tailored solutions for each client's unique challenges")}</span>
                            </div>
                            <div className="choose-value">
                                <i className="ri-check-double-fill"></i>
                                <span>{t("Practical, measurable and sustainable outcomes")}</span>
                            </div>
                            <div className="choose-button">
                                <Link className="default-btn text-decoration-none" to="/about">
                                    <i className="ri-arrow-right-line"></i>
                                    {t("Learn More")}
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="choose-image">
                            <img src={choose_imag_1} alt="choose-image" />
                            <div className="image-2">
                                <img src={choose_imag_2} alt="choose-image" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default ChooseUs