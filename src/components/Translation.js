import { useState } from "react"
import { isStorageAvailable, setStorage } from "../utils/localStorage"
import { saveTranslation } from "../utils/translationHistory"

import "../assets/styles/InputBox-common.css"
import "../assets/styles/Translation.css"

function Translation() {
	const [signs, setSigns] = useState([])
	const [textToTranslate, setTextToTranslate] = useState("")
	const [isEnteredTextEmpty, setIsEnteredTextEmpty] = useState(false)

	function handleTranslation() {
		updateTranslationHistory(textToTranslate)

		let signArray = [] //Sanitizing state by clearing array

		let charArray = Array.from(textToTranslate.toLowerCase())

		charArray.forEach((char) => {
			if (char === " ") {
				signArray.push("dash")
			} else if (/[a-zA-Z]/.test(char)) {
				// Special characters will be skipped
				signArray.push(char)
			}
		})

		setSigns(signArray)
	}

	function updateTranslationHistory(text) {
		if (text.length === 0) {
			setIsEnteredTextEmpty(true)
		} else {
			setIsEnteredTextEmpty(false)
			if (isStorageAvailable) setStorage("translations", saveTranslation(textToTranslate))
		}
	}

	return (
		<div>
			<div className="input-container">
				<div className="input-box">
					<input
						className="input-text"
						onChange={(e) => setTextToTranslate(e.target.value)}
						placeholder="Input your translation"
						required
					/>
					<button type="button" value="Translate" onClick={handleTranslation}>
						Translate
					</button>
				</div>
				{isEnteredTextEmpty && <div className="error">Translation text must not be empty!</div>}
			</div>
			<div id="translated">
				{signs &&
					signs.map((sign, index) => <img key={index} src={`individual_signs/${sign}.png`} alt="Give up" />)}
			</div>
		</div>
	)
}

export default Translation
