import React, { useState } from "react"
import '../index.css'

export default function Meme() {
    const [allMemes, setAllMemes] = useState([])
    const [meme, setMeme] = useState(
        {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg"
        }
    )
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function handleChange(event) {
        const { name, value } = event.target
        setMeme((oldMeme) => ({
            ...oldMeme,
            [name]: value
        }))
    }
    function getMemeImage() {
    
        let memeIndex = Math.floor(Math.random() * allMemes.length)
        let newMemeImg = allMemes[memeIndex].url
        setMeme((prevMeme) => ({
            ...prevMeme,
            randomImage: newMemeImg
        }))
    }

    return (
        <div className="box">
            <section>

                <div className="input">
                    <input
                        type="text"
                        placeholder="top text"
                        className="form--input"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Bottom text"
                        className="form--input"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </div>
                <div className="btn">
                    <button onClick={getMemeImage} >
                        Get a new meme image <span>🖼</span>
                    </button>
                </div>
            </section>
            <div className="img">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}
