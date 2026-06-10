import React from 'react'
import { motion } from "framer-motion"

import ServiceCardFour from '../components/sections/services/serviceCardFour'
import service_bg from "../assets/images/services/services-5.jpg"
import SideBar from '../components/sections/sideBar'
import PageTitle from '../components/common/pageTitle'
import { ScrollRestoration } from 'react-router-dom'
import { zoomIn } from '../utlits/zoomIn'
import { slideUp } from '../utlits/slideUp'
import { servicesDataFour } from '../utlits/fackData/servicesDataFour'
import { useSiteSettings } from '../context/siteSettings'

const ServiceDetails = () => {
  const { t } = useSiteSettings()
  return (
    <>
      <PageTitle link={"Services Details"} pageName={"Services Details"} />
      <div className="services-details-area pt-100 pb-75">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <SideBar dActive={false} />
            </div>
            <div className="col-lg-8">
              <motion.div className="services-details-right-sidebar"
                initial="offscreen"
                whileInView="onscreen"
                variants={slideUp(1)}
                viewport={{ once: true, amount: 0 }}
              >
                <h1>{t("End-to-End Protection Across Modern IT Environments.")}</h1>
                <p>{t("Our platform is a unified solution that combines three powerful technologies — Next-Gen SIEM, Advanced IDS/IPS, and Advanced EDR — to provide end-to-end protection across modern IT environments, with unified visibility across endpoints, networks, cloud infrastructure, and applications.")}</p>
                <p>{t("The platform leverages machine learning–based threat detection, user and entity behavior analytics (UEBA), and advanced network and endpoint telemetry to detect both known and unknown threats in real time.")}</p>
                <motion.div className="image"
                  initial="offscreen"
                  whileInView="onscreen"
                  variants={zoomIn(1)}
                  viewport={{ once: true, amount: 0 }}
                >
                  <img src={service_bg} alt="services-image" />
                </motion.div>
                <p>{t("Built with multi-tenancy, role-based access control (RBAC), and automated deployment and lifecycle management, the platform is designed to support large enterprises and managed security service providers operating at scale.")}</p>
                <p>{t("Together, these integrated security capabilities enable organizations to detect, investigate, and respond to cyber threats faster — while maintaining centralized visibility, operational efficiency, and continuous protection across their entire digital infrastructure.")}</p>
                <div className="processing">
                  <h1>{t("Our GRC Services & Approach.")}</h1>
                  <p>{t("Our delivery model is structured but flexible — guided by industry standards and adapted to sector-specific risks. We follow a phased approach: Discovery & Alignment, Assessment & Gap Identification, Design & Planning, Implementation & Enablement, and Monitoring & Continuous Assurance.")}</p>
                </div>
                <div className="processing-cards">
                  <div className="row">
                    {
                      servicesDataFour.map(({ id, link, service_details, service_name }) => {
                        return (
                          <div key={id} className="col-lg-6 col-md-6">
                            <div className=' service-details'>
                              <ServiceCardFour id={id} link={link} service_details={service_details} service_name={service_name} />
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <ScrollRestoration />
    </>
  )
}

export default ServiceDetails