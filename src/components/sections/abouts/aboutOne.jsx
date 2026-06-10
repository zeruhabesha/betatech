import React from 'react'
import {motion} from "framer-motion"
import { Link } from 'react-router-dom'
import about_4 from "../../../assets/images/about/about-4.jpg"
import about_5 from "../../../assets/images/about/about-5.jpg"
import Members from '../../../assets/icons/members'
import Technology from '../../../assets/icons/technology'
import { slideUp } from '../../../utlits/slideUp'
import { useSiteSettings } from '../../../context/siteSettings'
const AboutOne = () => {
    const { t } = useSiteSettings()
    return (
        <section className="about-area style-2 pb-75">
            <div className="container">
                <motion.div className="row align-items-center"
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={slideUp()}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <div className="col-lg-6">
                        <div className="about-image style-2">
                            <div className="image-1">
                                <img src={about_4} alt="about-image" />
                            </div>
                            <div className="image-two">
                                <img src={about_5} alt="about-image" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content style-2">
                            <div className="title">
                                <span className="d-block">{t("About Beta Tech Hub")}</span>
                                <h2>{t("Who We Are — Securing Digital Infrastructure Since 2023.")}</h2>
                                <p>{t("Beta Tech Hub is a premier cybersecurity firm dedicated to securing digital infrastructure and driving innovation through AI-powered cybersecurity solutions — advanced security, proactive compliance, and resilient operations.")}</p>
                            </div>
                            <div className="content-card d-flex align-items-center">
                                <div className="icon">
                                    <Members />
                                </div>
                                <div className="content">
                                    <h3>{t("Certified Expert Consultants")}</h3>
                                    <p>{t("A highly qualified team backed by ISO 27001, ISO 9001, and PMP-certified consultants, with proven experience across public, finance, defense, and telecom sectors.")}</p>
                                </div>
                            </div>
                            <div className="content-card d-flex align-items-center">
                                <div className="icon">
                                    <Technology />
                                </div>
                                <div className="content">
                                    <h3>{t("AI-Powered Unified Platform")}</h3>
                                    <p>{t("Next-Gen SIEM, Advanced IDS/IPS, and Advanced EDR in one platform — built with multi-tenancy, RBAC, and automated deployment for enterprises and MSSPs at scale.")}</p>
                                </div>
                            </div>
                            <Link className="default-btn text-decoration-none" href="/about">
                                <i className="ri-arrow-right-line"></i>
                                {t("Know More About")}
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default AboutOne


