import React from 'react'
import { useSiteSettings } from '../../context/siteSettings'

const According = ({ id, question, ans, parentId, showId }) => {
    const { t } = useSiteSettings()
    return (
        <>
            <div className="accordion-item">
                <h2 className="accordion-header" id={id}>
                    <button className={`accordion-button ${id === showId ? "" : ""} `} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${id}`} aria-expanded={id === showId ? "true" : "false"} aria-controls={`collapse${id}`}>
                        <span>{t(question)}</span>
                    </button>
                </h2>
                <div id={`collapse${id}`} className={`accordion-collapse collapse ${id === showId ? "show" : ""} `} aria-labelledby={id} data-bs-parent={`#${parentId}`}>
                    <div className="accordion-body">
                        {t(ans)}
                    </div>
                </div>
            </div>

        </>
    )
}

export default According