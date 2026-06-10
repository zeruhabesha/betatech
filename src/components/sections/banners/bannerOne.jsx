import React, { useState } from 'react'
import { motion } from "framer-motion"
import hero_bg from "../../../assets/images/hero/hero-2.png"
import shap_2 from "../../../assets/images/shape/shape-2.png"
import { slideUp } from '../../../utlits/slideUp'
import ModalVideo from 'react-modal-video';
import "react-modal-video/scss/modal-video.scss";
import { Link } from 'react-router-dom'
import { useSiteSettings } from '../../../context/siteSettings'

const BannerOne = () => {
    const [isOpen, setOpen] = useState(false);
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
                            style={{ overflow: "hidden", borderRadius: "10px" }}
                            animate={{ y: [0, -18, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <motion.img src={hero_bg} alt="banner-image"
                                style={{ width: "100%", display: "block" }}
                                animate={{ scale: [1, 1.08, 1] }}
                                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                            />
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