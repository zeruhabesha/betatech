import React from 'react'
import {motion} from "framer-motion"
import Memory from '../../assets/icons/memory'
import Lock from '../../assets/icons/lock'
import Security from '../../assets/icons/security'
import { Link } from 'react-router-dom'
import { zoomIn } from '../../utlits/zoomIn'
import Title from '../common/title'
import { useSiteSettings } from '../../context/siteSettings'

const SecurityTwo = () => {
    const { t } = useSiteSettings()
    const securityTypes = [
        {
            id: 1,
            icon: <Memory />,
            security_name: "Threat Detection & Monitoring",
            details: "Continuous collection and analysis of logs, system activity, and security telemetry to detect suspicious behavior and incidents in real time.",
            link: "/service-details"
        },
        {
            id: 2,
            icon: <Lock />,
            security_name: "Behavior Analytics (UEBA)",
            details: "User and entity behavior analytics detect abnormal activities that may indicate compromised accounts or insider threats.",
            link: "/service-details"
        },
        {
            id: 3,
            icon: <Security />,
            security_name: "Response & Automation",
            details: "Rapid incident response with security automation, case management and ticketing for alerts — plus an agentic AI chatbot.",
            link: "/service-details"
        },

    ]
    return (
        <section className="security-area pt-100 pb-75">
            <div className="container">
                <Title sectionName={"What We Do"} sectionTitle={"The Central Nervous System of Your Security Operations."}/>

                <div className="row justify-content-center" data-cues="fadeIn">
                    {
                        securityTypes.map(({ id, details, icon, link, security_name }) => {
                            return (
                                <motion.div key={id} className="col-lg-4 col-sm-6"
                                    initial="offscreen"
                                    whileInView="onscreen"
                                    variants={zoomIn(id)}
                                    viewport={{ once: true, amount: 0.4 }}
                                >
                                    <div className="single-security-card text-center">
                                        <div className="icon">
                                            {icon}
                                        </div>
                                        <h3>{t(security_name)}</h3>
                                        <p>{t(details)}</p>
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
        </section>
    )
}

export default SecurityTwo