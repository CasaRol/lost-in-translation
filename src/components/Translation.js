import { useState } from 'react'

import '../assets/styles/translation.css'

function Translation() {

    const [signs, setSigns] = useState([])
    const [textToTranslate, setTextToTranslate] = useState("")

    function handleTranslation(event) {
        event.preventDefault();

        let signArray = [] //Sanitizing state by clearing array

        let charArray = Array.from(textToTranslate.toLowerCase())

        charArray.forEach(char => {
            if (char === " ") {
                signArray.push("dash")
            } else if (/[a-zA-Z]/.test(char)) { // Special characters will be skipped
                signArray.push(char)
            }
        });

        setSigns(signArray)
    }

    return (
        <div>
            <div>
                <input id="transInput" onChange={e => setTextToTranslate(e.target.value)} placeholder="Input your translation" required />
                <input id="translate-btn" type="submit" value="Translate" onClick={handleTranslation} />
            </div>
            <div id="translated">
                {signs && signs.map((sign, index) => (
                    <img key={index} src={`individual_signs/${sign}.png`} alt="Give up" />
                ))}
            </div>
        </div>
    )
}

export default Translation