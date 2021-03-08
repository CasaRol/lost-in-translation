import { useEffect, useState } from "react"
import { getStorage } from "../utils/localStorage"
import "../assets/styles/Profile.css"

function Profile() {
	const [username, setUsername] = useState(getStorage("username"))
	const [translations, setTranslations] = useState(getStorage("translations"))

	useEffect(() => {
		window.addEventListener("storage", () => {
			setUsername(getStorage("username"))
		})
	})

	useEffect(() => {
		window.addEventListener("storage", () => {
			setTranslations(getStorage("translations"))
		})
	})

	return (
		<>
			<div id="username-container">
				<h2 id="name">{username}'s</h2>
				<div id="title">Translation History</div>
			</div>
			<div id="translations">
				{translations && translations.map((translation, index) => <div key={index} className="translation-items">"{translation}"</div>)}
			</div>
		</>
	)
}

export default Profile
