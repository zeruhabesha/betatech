import React from 'react'
import { motion } from "framer-motion"
import PageTitle from '../components/common/pageTitle'
import { Link, ScrollRestoration } from 'react-router-dom'
import { slideUp } from '../utlits/slideUp'
import { useSiteSettings } from '../context/siteSettings'

const Register = () => {
  const { t } = useSiteSettings()
  return (
    <>
      <PageTitle link={"Register"} pageName={"Register"} />
      <div className="login-area ptb-100">
        <div className="container">
          <motion.div className="login-info"
            initial="offscreen"
            whileInView="onscreen"
            variants={slideUp(1)}
            viewport={{ once: true, amount: 0 }}
          >
            <h1>{t("Register Now")}</h1>
            <form>
              <div className="form-group">
                <input type="text" className="form-control" placeholder={t("Username")} />
              </div>
              <div className="form-group">
                <input type="password" className="form-control" placeholder={t("Your password")} />
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  {t("Remember me")}
                </label>
              </div>
              <button className="default-btn border-0" type="submit">
                <i className="ri-arrow-right-line"></i>
                {t("Register Now")}
              </button>
              <p>{t("Already have an account? Please")} <Link className="text-decoration-none" to="/login">{t("Login Here")}</Link></p>
            </form>
          </motion.div>
        </div>
      </div>
      <ScrollRestoration />
    </>
  )
}

export default Register