import React from 'react'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import about_1 from "../../../assets/images/about/about-1.jpg"
import about_2 from "../../../assets/images/about/about-2.jpg"
import about_3 from "../../../assets/images/about/about-3.jpg"
import { slideUp } from '../../../utlits/slideUp'
import AboutIconOne from '../../../assets/icons/aboutIconOne'
import AboutIconTwo from '../../../assets/icons/aboutIconTwo'
import AboutIconThree from '../../../assets/icons/aboutIconThree'
import AboutIconFour from '../../../assets/icons/aboutIconFour'
import { useSiteSettings } from '../../../context/siteSettings'
const AboutThree = () => {
    const { t } = useSiteSettings()
    const infoList = [
        {
            id: 1,
            title: "Certified Expert Consultants",
            details: "A highly qualified team backed by ISO 27001, ISO 9001, and PMP-certified consultants with proven sector experience.",
            icon: <AboutIconOne />
        },
        {
            id: 2,
            title: "AI-Powered Threat Detection",
            details: "Machine learning and user & entity behavior analytics uncover known and unknown threats in real time.",
            icon: <AboutIconTwo />
        },
        {
            id: 3,
            title: "Built for Enterprise & MSSP Scale",
            details: "Multi-tenancy and role-based access control let you securely manage multiple environments from a single interface.",
            icon: <AboutIconThree />
        },
        {
            id: 4,
            title: "Automated Deployment & Patching",
            details: "Automated lifecycle management keeps systems protected with minimal operational overhead.",
            icon: <AboutIconFour />
        },

    ]
    return (
        <div className="about-area pb-75">
            <div className="container">
                <div className="about-title-area">
                    <motion.div className="row align-items-center"
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={slideUp(1)}
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        <div className="col-lg-6">
                            <div className="about-title">
                                <span className="d-block">{t("About Beta Tech Hub")}</span>
                                <h2>{t("Your Trusted Shield in the Digital Era.")}</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-title">
                                <p>{t("Established in 2023, Beta Tech Hub is a premier cybersecurity firm dedicated to securing digital infrastructure and driving innovation through AI-powered cybersecurity solutions — advanced security, proactive compliance, and resilient operations.")}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <motion.div className="row"
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={slideUp(1)}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <div className="col-lg-6">
                        <div className="about-image">
                            <div className="image-1">
                                <img src={about_1} alt="about-image" />
                            </div>
                            <div className="image-2">
                                <img src={about_2} alt="about-image" />
                            </div>
                            <div className="image-3">
                                <img src={about_3} alt="about-image" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content">
                            {
                                infoList.map(({ details, icon, id, title }) => {
                                    return (
                                        <div key={id} className="content-card d-flex align-items-center">
                                            <div className="icon">
                                                {icon}
                                            </div>
                                            <div className="content">
                                                <h3>{t(title)}</h3>
                                                <p>{t(details)}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                            <Link className="default-btn text-decoration-none" to="/about">
                                <i className="ri-arrow-right-line"></i>
                                {t("Know More About")}
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default AboutThree