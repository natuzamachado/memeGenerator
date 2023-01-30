import React from "react"
import './index.css'
import memeImg from "../public/memeimg.png"

export default function Content(){
    return (
        <div className="box">
            <section>
               <div className="input">
                    <input placeholder="Shut up"></input>
                    <input placeholder="and take my money"></input>
               </div>
               <div className="btn">
                    <button>
                        <p>Get a new meme image <span>🖼</span></p>
                    </button>
               </div>  
            </section>
            <img src = {memeImg}/>
        </div>
    )
}
