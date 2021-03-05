import { useState } from 'react'

import '../assets/styles/translation.css'

function Translation() {

    const [imageList, setImageList] = useState([])
    const [word, setWord] = useState("")

    function handleTranslation() {

        let imgArray = []

        let arr = Array.from(word.toLowerCase())

        arr.forEach(element => {
            if (element === " ") {
                imgArray.push("dash")
            } else if (/[a-zA-Z]/.test(element)) {
                imgArray.push(element)
            } else {
                //Escape special characters by skipping them
            }
        });

        setImageList(imgArray)
    }

    return (
        <div>
            <div>
                <input id="transInput" onChange={e => setWord(e.target.value)} placeholder="Input your translation" required />
                <input id="translate-btn" type="submit" value="Translate" onClick={handleTranslation} />
            </div>
            <div id="translated">
                {imageList && imageList.map((sign, index) => (
                    <img key={index} src={`individual_signs/${sign}.png`} alt="Give up" />
                ))}
            </div>
        </div>
    )
}

export default Translation