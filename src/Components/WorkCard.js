import React from "react";

export default function WorkCard(props) {
    return (
        <div className="work-card">
            <img src={require(`../images/${props.logo}`)} />
            <h4>{props.company}</h4>
            <h3>{props.title}</h3>
            <h4>({props.years})</h4>
            <p>{props.description}</p>
        </div>
    )
}
