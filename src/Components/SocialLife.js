import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


export default function SocialLife() {
    return (
        <div className="social-life">
            <h1>Social Life<span className="color-p">.</span></h1>

            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="January 2023 - Now"
                    dateClassName="custom-date-class"
                    iconStyle={{ background: 'white', color: '#fff' }}
                    icon={<img src={require("../images/jci.png")} className="social-life-logo" />}
                >
                    <h3 className="vertical-timeline-element-title">JCI Ouedhref</h3>
                    <h4 className="vertical-timeline-element-subtitle">Treasurer</h4>

                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="January 2022 - January 2023"
                    dateClassName="custom-date-class"
                    iconStyle={{ background: 'white', color: '#fff' }}
                    icon={<img src={require("../images/jci.png")} className="social-life-logo" />}
                >
                    <h3 className="vertical-timeline-element-title">JCI Ouedhref</h3>
                    <h4 className="vertical-timeline-element-subtitle">Media Manager</h4>

                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="October 2021 - August 2022"
                    dateClassName="custom-date-class"
                    iconStyle={{ background: 'white', color: '#fff' }}
                    icon={<img src={require("../images/psd.png")} className="social-life-logo" />}
                >
                    <h3 className="vertical-timeline-element-title">Problem Solving Division (hosted by IEEE ISSATSo SB CS)</h3>
                    <h4 className="vertical-timeline-element-subtitle">Web Master</h4>

                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="August 2021 - December 2022"
                    dateClassName="custom-date-class"
                    iconStyle={{ background: 'white', color: '#fff' }}
                    icon={<img src={require("../images/ieee.png")} className="social-life-logo" />}
                >
                    <h3 className="vertical-timeline-element-title">IEEE ISSATSO Student Branch</h3>
                    <h4 className="vertical-timeline-element-subtitle">Member</h4>

                </VerticalTimelineElement>
                
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="September 2020 - June 2021"
                    dateClassName="custom-date-class"
                    iconStyle={{ background: 'white', color: '#fff' }}
                    icon={<img src={require("../images/nateg.png")} className="social-life-logo" />}
                >
                    <h3 className="vertical-timeline-element-title">NATEG ISSATSO Student Chapter</h3>
                    <h4 className="vertical-timeline-element-subtitle">Media Manager</h4>

                </VerticalTimelineElement>
                
            </VerticalTimeline>
        </div>
    )
}