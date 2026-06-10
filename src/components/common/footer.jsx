import React from 'react'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import logo from "../../assets/images/white-logo.png"
import Subscribe from './subscribe'
import { slideUp } from '../../utlits/slideUp'
import { useSiteSettings } from '../../context/siteSettings'
const Footer = () => {
  const { t } = useSiteSettings()
  const footerLink = [
    {
      id: 1,
      name: "Quick Links",
      links: [
        {
          id: 1,
          link: "/about",
          label: "About"
        },
        {
          id: 2,
          link: "/services",
          label: "Services"
        },
        {
          id: 3,
          link: "/testimonial",
          label: "Testimonial"
        },
        {
          id: 4,
          link: "/blog-details",
          label: "Our Blog"
        },

      ]
    },
    {
      id: 2,
      name: "Resourses",
      links: [
        {
          id: 1,
          link: "/faq",
          label: "FAQs"
        },
        {
          id: 2,
          link: "/privacy-policy",
          label: "Privacy Policy"
        },
        {
          id: 3,
          link: "/terms-conditions",
          label: "Terms & Conditions"
        },
        {
          id: 4,
          link: "/contact",
          label: "contact Us"
        },

      ]
    },
  ]
  return (
    <footer>
      <Subscribe />
      {/* -------- footer info */}
      <div className="footer-area">
        <div className="container">
          <motion.div className="footer-info-area"
            initial="offscreen"
            whileInView="onscreen"
            variants={slideUp(1)}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="row">
              <div className="col-lg-4">
                <div className="single-footer-info ms-0">
                  <Link className="text-decoration-none logo" to="/">
                    <img src={logo} alt="logo" />
                  </Link>
                  <p>Beta Tech Hub is a premier cybersecurity firm established in 2023 — your trusted shield in the digital era. We secure digital infrastructure and drive innovation through AI-powered cybersecurity solutions, proactive compliance, and resilient operations.</p>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-sm-6 col-md-4">
                    <div className="single-footer-info">
                      <h3>{t("Contact Us")}</h3>
                      <ul className="list-unstyled ps-0 mb-0">
                        <li>
                          <strong>Address : </strong>GARAMULETA Luxury Apartment,
                          Wolo Sefer, Bole, Addis Ababa, Ethiopia.
                        </li>
                        <li>
                          <strong>Email:</strong>
                          <a className="text-decoration-none" href="mailto:info@betatechhub.com">info@betatechhub.com</a>
                        </li>
                        <li>
                          <strong>Phone:</strong>
                          <a className="text-decoration-none" href="tel:+251909523769">+251 90 952 3769</a>
                        </li>
                        <li>
                          <strong>Website:</strong>
                          <a className="text-decoration-none" href="https://www.betatechhub.com">www.betatechhub.com</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {
                    footerLink.map(({ id, links, name }) => {
                      return (
                        <div key={id} className="col-lg-4 col-sm-6 col-md-4">
                          <div className="single-footer-info">
                            <h3>{t(name)}</h3>
                            <ul className="list-unstyled ps-0 mb-0">
                              {
                                links.map(({ id, label, link }) => {
                                  return (
                                    <li key={id}>
                                      <Link className="text-decoration-none" to={link}>{t(label)}</Link>
                                    </li>
                                  )
                                })
                              }
                            </ul>
                          </div>
                        </div>
                      )
                    })
                  }

                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* ---------- copy right area */}
      <div className="copyright-area">
        <div className="container">
          <div className="copyright-content text-center" data-cue="slideInUp">
            <p>Copyright © 2026 <strong>Beta Tech Hub</strong> — Your Trusted Shield in the Digital Era. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer