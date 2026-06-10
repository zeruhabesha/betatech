import React from 'react'
import Title from '../common/title'
import { useSiteSettings } from '../../context/siteSettings'

const ContactForm = () => {
    const { t } = useSiteSettings()
    return (
        <div className="contact-form-area pb-75">
            <div className="container">
                <Title sectionName={"Send Us A Message"} sectionTitle={"Get in Touch With Us Today."}/>

                <div className="contact-form-info" data-cue="slideInUp">
                    <form>
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder={t("Name")} />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder={t("Email")} />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder={t("Phone")} />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder={t("Subject")} />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control textarea" placeholder={t("Enter Your Comments")} rows="3"></textarea>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                {t("Save my name, email, and website in this browser for the next time I comment.")}
                            </label>
                        </div>
                        <button type="submit">{t("Send A Message")}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm