import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { useSiteSettings } from '../../context/siteSettings';

const Countter = () => {
    const { t } = useSiteSettings();
    const { ref, inView, entry } = useInView({
        threshold: 0,
    });
    const counterData = [
        {
            id: 1,
            counter: <CountUp start={0} end={24} duration={2} delay={0}></CountUp>,
            label: "/7",
            title: "CONTINUOUS SECURITY MONITORING",
        },
        {
            id: 2,
            counter: <CountUp start={0} end={3} duration={2} delay={0}></CountUp>,
            label: "+",
            title: "INTEGRATED TECHNOLOGIES — SIEM, IDS/IPS & EDR",
        },
        {
            id: 3,
            counter: <CountUp start={0} end={100} duration={2} delay={0}></CountUp>,
            label: "%",
            title: "CUSTOMER SATISFACTION",
        },
        {
            id: 4,
            counter: <CountUp start={0} end={4} duration={2} delay={0}></CountUp>,
            label: "+",
            title: "HIGH-STAKES SECTORS — PUBLIC, FINANCE, DEFENSE & TELECOM",
        },
    ];
    return (

        <div ref={ref} className="counter-area pb-75 style-2">
            <div className="container">
                <div className="row" data-cues="fadeIn">
                    {counterData.map(({ counter, id, title, label }) => (
                        <div key={id} className="col-lg-3 col-sm-6">
                            <div className="single-counter-card style-2">

                                {inView && <h2><span className="counter">{counter}</span> <span>{label}</span> </h2>}

                                <p>{t(title)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Countter