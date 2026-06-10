import React from 'react'
import Rating from './rating'
import { useSiteSettings } from '../../context/siteSettings'

const TestimonialCard = ({src, name, position, rating, review}) => {
    const { t } = useSiteSettings()
    return (
        <div className="single-testimonial-card">
            <div className="testimonial-user d-flex align-items-center justify-content-between">
                <div className="user d-flex align-items-center">
                    <div className="image">
                        <img src={src} alt="testimonial-image" />
                    </div>
                    <div className="content">
                        <h3>{name}</h3>
                        <span>{t(position)}</span>
                    </div>
                </div>
                <div className="star-icon">
                    <ul className="list-unstyled ps-0 mb-0">
                        <Rating star={rating} />
                    </ul>
                </div>
            </div>
            <p>{t(review)}</p>
        </div>
    )
}

export default TestimonialCard