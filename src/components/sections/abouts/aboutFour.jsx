import React from 'react'
import { motion } from "framer-motion"
import about_image from "../../../assets/images/about/about-7.png"
import { Link } from 'react-router-dom'
import { slideUp } from '../../../utlits/slideUp'
import { useSiteSettings } from '../../../context/siteSettings'
const AboutFour = () => {
    const { t } = useSiteSettings()
    return (
        <div className="about-area pt-100 pb-75">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <motion.div className="about-image"
                            initial="offscreen"
                            whileInView="onscreen"
                            variants={slideUp(1)}
                            viewport={{ once: true, amount: 0.4 }}
                        >
                            <img src={about_image} alt="about-image" />
                        </motion.div>
                    </div>
                    <div className="col-lg-6">
                        <motion.div className="about-content about-style"
                            initial="offscreen"
                            whileInView="onscreen"
                            variants={slideUp(2)}
                            viewport={{ once: true, amount: 0.4 }}
                        >
                            <div className="title">
                                <span className="d-block">{t("About")}</span>
                                <h2>{t("Detect, Investigate, and Respond to Threats Faster.")}</h2>
                                <p>{t("Beta Tech Hub combines a unified, AI-powered security platform with a premier Governance, Risk, and Compliance practice — so your organization gains continuous protection, verifiable compliance, and lasting cybersecurity maturity.")}</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-sm-6">
                                    <div className="about-item">
                                        <div className="point">
                                            5
                                        </div>
                                        <h3>{t("Phase Delivery Model")}</h3>
                                        <p>{t("Discovery & Alignment, Assessment, Design & Planning, Implementation, and Continuous Assurance.")}</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6">
                                    <div className="about-item">
                                        <div className="point">
                                            24/7
                                        </div>
                                        <h3>{t("Continuous Protection")}</h3>
                                        <p>{t("Centralized visibility, operational efficiency, and continuous protection across your infrastructure.")}</p>
                                    </div>
                                </div>
                            </div>
                            <Link className="demo text-decoration-none" to="/contact">{t("Request A Quote")}</Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutFour