import React from "react";

export default function ProjectCard(props) {
    const [imageIndex, setImageIndex] = React.useState(0);
    const images = [props.image1, props.image2, props.image3];

    React.useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 2500);

        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <div className="project-card">
            <img src={require(`../images/${images[imageIndex]}`)} />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <p>
                {props.tag1 && <span className="color-p">#{props.tag1} </span>}
                {props.tag2 && <span className="color-tag2">#{props.tag2} </span>}
                {props.tag3 && <span className="color-tag3">#{props.tag3} </span>}
            </p>

        </div>
    )
}
