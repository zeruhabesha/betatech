import React, { useState } from 'react'
import { motion } from "framer-motion"
import shap_2 from "../../../assets/images/shape/shape-2.png"
import { slideUp } from '../../../utlits/slideUp'
import ModalVideo from 'react-modal-video';
import "react-modal-video/scss/modal-video.scss";
import { Link } from 'react-router-dom'
import { useSiteSettings } from '../../../context/siteSettings'

const securityNodes = [
    { className: "node node-one", label: "SOC", x: "20%", y: "21%" },
    { className: "node node-two", label: "AI", x: "69%", y: "27%" },
    { className: "node node-three", label: "EDR", x: "25%", y: "74%" },
    { className: "node node-four", label: "SIEM", x: "76%", y: "76%" },
]

const BannerOne = () => {
    const [isOpen, setOpen] = useState(false);
    const [isScanning, setIsScanning] = useState(false);
    const { t } = useSiteSettings();
    return (
        <section className="banner-area">
            <div className="container-fluid">
                <motion.div className="row align-items-center"
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={slideUp(1)}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <div className="col-lg-6">
                        <div className="banner-content">
                            <div className="title">
                                <h1>{t("Your Trusted Shield in the Digital Era.")}</h1>
                                <p>{t("Beta Tech Hub secures digital infrastructure with AI-powered cybersecurity — advanced security, proactive compliance, and resilient operations for organizations that can't afford to fail.")}</p>
                            </div>
                            <div className="banner-button d-flex align-items-center">
                                <Link className="demo text-decoration-none" to="/contact">{t("Request A Demo")}</Link>
                                <div className="play-btn d-flex align-items-center">
                                    <div onClick={() => setOpen(true)} className="text-decoration-none popup-youtube icon " >
                                        <i className="ri-play-mini-fill"></i>
                                    </div>
                                    <div onClick={() => setOpen(true)} className="text-decoration-none popup-youtube text-white ">
                                        {t("Watch Intro Video")}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <motion.div className="banner-image"
                            role="img"
                            aria-label="Animated cybersecurity shield scanning connected systems"
                            onClick={() => setIsScanning((active) => !active)}
                            onKeyDown={(event) => {
                                if (event.key === "Enter" || event.key === " ") {
                                    event.preventDefault();
                                    setIsScanning((active) => !active);
                                }
                            }}
                            tabIndex={0}
                            whileHover={{ y: -8 }}
                            animate={{ y: [0, -14, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className={`hero-security-visual ${isScanning ? "is-scanning" : ""}`}>
                                <div className="scan-grid"></div>
                                <motion.div
                                    className="shield-core"
                                    animate={{ scale: isScanning ? [1, 1.04, 1] : [1, 1.02, 1] }}
                                    transition={{ duration: isScanning ? 1.8 : 4.5, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    <svg viewBox="0 0 160 188" aria-hidden="true">
                                        <path className="shield-fill" d="M80 8 142 31v51c0 46-25 78-62 98-37-20-62-52-62-98V31L80 8Z" />
                                        <path className="shield-line" d="M80 27 124 43v39c0 34-17 58-44 74-27-16-44-40-44-74V43l44-16Z" />
                                        <path className="shield-check" d="m54 91 18 18 38-48" />
                                    </svg>
                                </motion.div>

                                <svg className="network-lines" viewBox="0 0 600 460" aria-hidden="true">
                                    <path d="M126 102 C210 102 238 184 300 226" />
                                    <path d="M418 130 C370 160 338 190 300 226" />
                                    <path d="M158 342 C222 306 250 274 300 226" />
                                    <path d="M454 352 C394 314 350 280 300 226" />
                                </svg>

                                {securityNodes.map((node, index) => (
                                    <motion.div
                                        key={node.label}
                                        className={node.className}
                                        style={{ left: node.x, top: node.y }}
                                        animate={{
                                            scale: isScanning ? [1, 1.12, 1] : [1, 1.05, 1],
                                            opacity: [0.82, 1, 0.82],
                                        }}
                                        transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.35, ease: "easeInOut" }}
                                    >
                                        {node.label}
                                    </motion.div>
                                ))}

                                <motion.div
                                    className="scan-ring ring-one"
                                    animate={{ scale: [0.76, 1.22], opacity: [0.36, 0] }}
                                    transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut" }}
                                />
                                <motion.div
                                    className="scan-ring ring-two"
                                    animate={{ scale: [0.6, 1.08], opacity: [0.28, 0] }}
                                    transition={{ duration: 2.8, repeat: Infinity, delay: 1.1, ease: "easeOut" }}
                                />
                                <div className="visual-status">
                                    <span>{isScanning ? t("Active Scan") : t("Protected")}</span>
                                    <strong>{isScanning ? "99.9%" : "24/7"}</strong>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
            <div className="shape">
                <motion.div className="shape-2"
                    animate={{ x: [0, 30, 0], opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                >
                    <img src={shap_2} alt="shape" />
                </motion.div>
            </div>
            <ModalVideo
                channel="youtube"
                youtube={{ mute: 0, autoplay: 0 }}
                isOpen={isOpen}
                videoId="0O2aH4XLbto"
                onClose={() => setOpen(false)}
            />
        </section>
    )
}

export default BannerOne
