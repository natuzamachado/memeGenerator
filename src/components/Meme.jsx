import React, { useState } from "react"
import '../index.css'
import memesData from "../../memesData"

export default function Meme(){
    const [memeImage, setMemeImage] = useState("")

    function getMemeImage() {
        let memeIndex = Math.floor(Math.random() * memesData.data.memes.length)
        let newMemeImg = memesData.data.memes[memeIndex].url
        setMemeImage(newMemeImg)
    }
    
    return (
        <div className="box">
            <section>
               <div className="input">
                    <input type= "text" placeholder="Top text"></input>
                    <input type = "text" placeholder="Bottom text"></input>
               </div>
               <div className="btn">
                    <button onClick = {getMemeImage} >
                        Get a new meme image <span>🖼</span>
                    </button>
               </div>  
            </section>
            <div className="img">
                <img src={memeImage} />
            </div> 
        </div>
    )
}
