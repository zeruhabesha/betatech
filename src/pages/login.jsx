import React from 'react'
import { motion } from "framer-motion"
import { Link, ScrollRestoration } from 'react-router-dom'
import PageTitle from '../components/common/pageTitle'
import { slideUp } from '../utlits/slideUp'
import { useSiteSettings } from '../context/siteSettings'

const Login = () => {
  const { t } = useSiteSettings()
  return (
    <>
      <PageTitle link={"Log In Now"} pageName={"Log In Now"} />
      <div className="login-area ptb-100">
        <div className="container">
          <motion.div className="login-info"
            initial="offscreen"
            whileInView="onscreen"
            variants={slideUp(1)}
            viewport={{ once: true, amount: 0 }}
          >
            <h1>{t("Log In Now")}</h1>
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
                {t("Log In Now")}
              </button>
              <p>{t("Don't have an account?")} <Link className="text-decoration-none" to="/login">{t("Sign Up")}</Link></p>
            </form>
          </motion.div>
        </div>
      </div>
      <ScrollRestoration />
    </>
  )
}

export default Login