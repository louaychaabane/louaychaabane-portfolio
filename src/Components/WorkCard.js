import React from "react";

export default function WorkCard(props) {
    const isCurrent = props.current; // flag for current job

    return (
        <div className={`work-card ${isCurrent ? "current-job" : ""}`}>
            <img src={require(`../images/${props.logo}`)} alt={props.company} />
            <h4>{props.company}</h4>
            <h3>{props.title}</h3>
            <h4>({props.years})</h4>
            <p>{props.description}</p>
        </div>
    );
}
