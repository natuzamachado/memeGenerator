import React from "react";
import trollFace  from "../../public/trollFace.png"
import '../index.css'

export default function Header(){
    return(
        <nav>
            <div className="nav-bar">
                <img className="logo" src = {trollFace} alt = "Troll face"/>
                <p>Meme Generator</p>
            </div>
            <div className="nav-bar">
                <p id = "title">React Course - Project 3</p>
            </div>
        </nav>
    )
}
