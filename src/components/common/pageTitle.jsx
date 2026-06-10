import React from 'react'
import { Link } from 'react-router-dom'
import { useSiteSettings } from '../../context/siteSettings'

const PageTitle = ({pageName, link}) => {
  const { t } = useSiteSettings()
  return (
    <section className="page-title-area">
      <div className="container">
        <div className="page-title-content text-center">
          <h1>{t(pageName)}</h1>
          <ul className="list-unstyled ps-0 mb-0 gap-2">
            <li className="d-inline-block">
              <Link className="text-decoration-none" to="/">{t("Home")}</Link>
            </li>
            <li className="d-inline-block ms-2">{t(link)}</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default PageTitle