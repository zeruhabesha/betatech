import React from 'react'
import { motion } from "framer-motion"
import about_bg from "../../../assets/images/about/about-6.png"
import { slideUp } from '../../../utlits/slideUp'
import { useSiteSettings } from '../../../context/siteSettings'
const AboutTwo = () => {
  const { t } = useSiteSettings()
  return (
    <div className="about-area pb-75">
      <div className="container">
        <div className="row align-items-center" data-cue="slideInUp">
          <div className="col-lg-8">
            <motion.div className="about-content style-3"
              initial="offscreen"
              whileInView="onscreen"
              variants={slideUp(1)}
              viewport={{ once: true, amount: 0.4 }}
            >
              <div className="title">
                <span className="d-block">{t("About Beta Tech Hub")}</span>
                <h2>{t("Unified Visibility Across Your Entire Digital Infrastructure.")}</h2>
                <p>{t("Established in 2023, Beta Tech Hub is a premier cybersecurity firm dedicated to securing digital infrastructure and driving innovation through AI-powered cybersecurity solutions. Our integrated security capabilities enable organizations to detect, investigate, and respond to cyber threats faster.")}</p>
              </div>
              <div className="row">
                <div className="col-lg-6 col-sm-6">
                  <div className="content-item">
                    <h3>{t("Our Mission & Vision")}</h3>
                    <p>{t("To be your trusted shield in the digital era — delivering advanced security, proactive compliance, and resilient operations across every environment.")}</p>
                  </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                  <div className="content-item">
                    <h3>{t("Our Purpose")}</h3>
                    <p>{t("To maintain centralized visibility, operational efficiency, and continuous protection across your entire digital infrastructure.")}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="col-lg-4">
            <motion.div className="about-image style-3"
              initial="offscreen"
              whileInView="onscreen"
              variants={slideUp(2)}
              viewport={{ once: true, amount: 0.4 }}
            >
              <motion.img src={about_bg} alt="about-image"
                animate={{ y: [0, -16, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutTwo