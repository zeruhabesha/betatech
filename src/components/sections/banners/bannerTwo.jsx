import React, { useState } from 'react'
import { motion } from "framer-motion"
import banner_wapper_shap from "../../../assets/images/hero/banner-wrapper-shape.png"
import banner_wapper_image from "../../../assets/images/hero/banner-wrapper-1.png"
import banner_wapper_image_shap from "../../../assets/images/hero/banner-wrapper-image-shape.png"
import { slideUp } from '../../../utlits/slideUp'
import { Link } from 'react-router-dom'
import ModalVideo from 'react-modal-video';
import "react-modal-video/scss/modal-video.scss";
import { useSiteSettings } from '../../../context/siteSettings'

const BannerTwo = () => {
    const [isOpen, setOpen] = useState(false);
    const { t } = useSiteSettings();
    return (
        <section className="banner-wrapper-area">
            <div className="container-fluid">
                <div className="row"
                >
                    <div className="col-lg-7">
                        <motion.div className="banner-wrapper-content"
                            initial="offscreen"
                            whileInView="onscreen"
                            variants={slideUp(1)}
                            viewport={{ once: true, amount: 0.4 }}
                        >
                            <div className="title">
                                <span className="d-block">{t("One Unified Security Platform:")}</span>
                                <h1>{t("Next-Gen SIEM, Advanced IDS/IPS & Advanced EDR — End-to-End Protection.")}</h1>
                                <p>{t("Unified visibility across endpoints, networks, cloud infrastructure, and applications — with machine learning–based threat detection, UEBA, and advanced telemetry to stop known and unknown threats in real time.")}</p>
                            </div>
                            <div className="banner-wrapper-button d-flex align-items-center">
                                <Link className="demo text-decoration-none" to="/contact">
                                    {t("Request A Demo")}
                                    <div className="dote"></div>
                                </Link>
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
                    <div className="col-lg-5">
                        <motion.div className="banner-wrapper-image"
                            initial="offscreen"
                            whileInView="onscreen"
                            variants={slideUp(2)}
                            viewport={{ once: true, amount: 0.4 }}
                        >
                            <motion.div
                                style={{ overflow: "hidden", borderRadius: "10px" }}
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <motion.img src={banner_wapper_image} alt="banner-wrapper"
                                    style={{ width: "100%", display: "block" }}
                                    animate={{ scale: [1, 1.08, 1] }}
                                    transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                                />
                            </motion.div>
                            <div className="bg-shape">
                                <motion.img src={banner_wapper_image_shap} alt="shape"
                                    animate={{ scale: [1, 1.06, 1], rotate: [0, 3, 0, -3, 0] }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="banner-wrapper-shape" >
                <img src={banner_wapper_shap} alt="shape" />
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

export default BannerTwo