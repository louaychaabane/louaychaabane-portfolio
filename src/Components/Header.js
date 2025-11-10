import React from "react";

export default function Header() {
    const [isNavExpanded, setIsNavExpanded] = React.useState(false)
    const scrollToAbout = () => {
        const aboutSection = document.getElementById("about");
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: "smooth" });
        }
      };
    return (
        <div className="header">
            <div className="logo-name" onClick={scrollToAbout}>
                <img src={require("../images/logo.png")} className="logo-lch" alt=""/>
                <p>Louay | Software Engineer</p>
            </div>
            <button className="hamburger" onClick={() => {
                setIsNavExpanded(!isNavExpanded);
            }}>
                {/* icon from heroicons.com */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="white"
                >
                    <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            <div
                className={isNavExpanded ? "nav-menu expanded" : "nav-menu"}>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#work">Work</a></li>

                    <li><a href="#social-life">Social Life</a></li>
                </ul>
            </div>
        </div>
    )
}