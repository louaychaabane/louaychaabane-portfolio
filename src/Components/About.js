import React from "react";
import TypingEffect from './TypingEffect';

export default function About() {

    const words = ['Software Engineer','Web Developer', 'Graphic Designer',  'Front-End Developer'];
    const typingSpeed = 100;
    return (
        <div className="about component">
            <div className="bracket">&#123;</div>
            <h1>Hi, I'm <span className="color-p">Louay Chaabane</span></h1>
            
            <h3>a <TypingEffect words={words} speed={typingSpeed} /></h3>
            <h4><span className="rect-s">+100</span> Web Projects ({new Date().getFullYear() - 2020} years)</h4>
            <h4><span className="rect-s">+700</span> Freelance Graphic Design Projects ({new Date().getFullYear() - 2018} years)</h4>
            <h4><span className="rect-s">4</span> Training sessions presented</h4>
            <img src={require("../images/avatar.png")} className="avatar" />
            <div class="flex-center">
                <a href="https://www.linkedin.com/in/chaabane-louay" target="_blank"><i class="fa fa-linkedin fa-4x icon-3d"></i></a>
                <a href="https://www.instagram.com/lchdesigner/" target="_blank"><i class="fa fa-instagram fa-4x icon-3d"></i></a>
                <a href="https://github.com/louaychaabane" target="_blank"><i class="fa fa-github fa-4x icon-3d"></i></a>
                <a href="https://www.behance.net/louaychaabane" target="_blank"><i class="fa fa-behance fa-4x icon-3d"></i></a>
                <a href="https://t.me/louaychaabane" target="_blank"><i class="fa fa-telegram fa-4x icon-3d"></i></a>
            </div>
        </div>

    )
}