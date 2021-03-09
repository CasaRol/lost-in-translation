import { useState } from "react"
import { getStorage } from "../utils/localStorage"
import "../assets/styles/Profile.css"

function Profile({ username }) {
    const [translations] = useState(getStorage("translations"))

    return (
		<>
			<div className="background-container">
				<div id="username-container">
					<h2 id="name">{username}'s</h2>
					<div id="title">Translation History</div>
				</div>
			</div>
			<div id="translations">
				{translations &&
					username &&
					translations.map((translation, index) => (
						<div key={index} className="translation-items">
							"{translation}"
						</div>
					))}
			</div>
		</>
	)
}

export default Profile
