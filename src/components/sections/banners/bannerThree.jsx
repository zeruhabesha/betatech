import React, { useState } from 'react'
import { motion } from "framer-motion"
import shap_1 from "../../../assets/images/shape/shape-1.png"
import ServicesFour from '../services/servicesFour'
import { slideUp } from '../../../utlits/slideUp'
import ModalVideo from 'react-modal-video';
import "react-modal-video/scss/modal-video.scss";
import { useSiteSettings } from '../../../context/siteSettings'

const BannerThree = () => {
    const [isOpen, setOpen] = useState(false);
    const { t } = useSiteSettings();
    return (
        <>
            <section className="hero-area">
                <div className="container-fluid">
                    <motion.div className="hero-content"
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={slideUp(1)}
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        <div className="title">
                            <span className="d-block">{t("Governance, Risk & Compliance:")}</span>
                            <h1>{t("Proactive Risk Management for High-Stakes Environments.")}</h1>
                            <p>{t("Regulators, boards, and clients demand continuous, verifiable proof that your enterprise is protected and well governed. We turn compliance from a burden into a strategic competitive advantage.")}</p>
                        </div>
                        <div className="hero-button d-flex align-items-center">
                            <a className="demo text-decoration-none" href="/contact">
                                {t("Request A Demo")}
                                <div className="dote"></div>
                            </a>
                            <div className="play-btn d-flex align-items-center">
                                <div onClick={() => setOpen(true)} className="text-decoration-none popup-youtube icon">
                                    <i className="ri-play-mini-fill"></i>
                                </div>
                                <div onClick={() => setOpen(true)} className="text-decoration-none popup-youtube text-white ">
                                    {t("Watch Intro Video")}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <motion.div className="shape-1"
                    animate={{ y: [0, -25, 0], opacity: [0.85, 1, 0.85] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                >
                    <img src={shap_1} alt="hero-shape" />
                </motion.div>
                <ModalVideo
                    channel="youtube"
                    youtube={{ mute: 0, autoplay: 0 }}
                    isOpen={isOpen}
                    videoId="0O2aH4XLbto"
                    onClose={() => setOpen(false)}
                />
            </section>
            <ServicesFour style={"pb-75 top-70"} />
        </>
    )
}

export default BannerThree