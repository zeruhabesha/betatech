import React from 'react'
import { motion } from "framer-motion"
import choose_bg from "../../assets/images/choose/choose-3.png"
import choose_text_logo from "../../assets/images/choose/choose-logo-text.png"
import choose_text_icon from "../../assets/images/choose/choose-logo-icon.jpg"
import top_shap from "../../assets/images/choose/choose-top-shape.png"
import bottom_shap from "../../assets/images/choose/choose-bottom-shape.png"
import { slideUp } from '../../utlits/slideUp'
import { Link } from 'react-router-dom'
import { useSiteSettings } from '../../context/siteSettings'

const ChooseUsTwo = () => {
    const { t } = useSiteSettings()
    return (
        <section className="choose-area style-3 pt-100 pb-75">
            <div className="container">
                <motion.div className="row"
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={slideUp()}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <div className="col-lg-6">
                        <div className="choose-image style-3">
                            <img src={choose_bg} alt="choose-image" />
                            <div className="logo">
                                <img src={choose_text_logo} alt="text" />
                                <div className="icon">
                                    <img src={choose_text_icon} alt="logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="choose-content style-3">
                            <div className="title">
                                <span className="d-block">{t("Why Choose Us?")}</span>
                                <h2>{t("From Reactive Troubleshooting to Proactive Risk Management.")}</h2>
                            </div>
                            <div className="choose-value">
                                <i className="ri-check-double-fill"></i>
                                <span>{t("End-to-end delivery — from strategy to implementation and monitoring")}</span>
                            </div>
                            <div className="choose-value">
                                <i className="ri-check-double-fill"></i>
                                <span>{t("Machine learning–based threat detection with UEBA")}</span>
                            </div>
                            <div className="choose-value">
                                <i className="ri-check-double-fill"></i>
                                <span>{t("Multi-tenancy and role-based access control (RBAC)")}</span>
                            </div>
                            <div className="choose-value">
                                <i className="ri-check-double-fill"></i>
                                <span>{t("ISO 27001, ISO 9001 and PMP-certified consultants")}</span>
                            </div>
                            <div className="choose-value">
                                <i className="ri-check-double-fill"></i>
                                <span>{t("Practical, measurable outcomes at a competitive fee")}</span>
                            </div>
                            <div className="choose-button">
                                <Link className="default-btn text-decoration-none" to="/about">
                                    <i className="ri-arrow-right-line"></i>
                                    {t("Learn More")}
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className="top-shape">
                <img src={top_shap} alt="shape" />
            </div>
            <div className="bottom-shape">
                <img src={bottom_shap} alt="shape" />
            </div>
        </section>
    )
}

export default ChooseUsTwo