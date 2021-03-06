//Styling imports
import "../assets/styles/Profile.css"
//Functional imports
import { useState } from "react"
import { getStorage } from "../utils/localStorage"

function Profile(props) {
	const [translations] = useState(getStorage("translations"))

	return (
		<div>
			<div className="background-container">
				<div id="username-container">
					<h2 id="name">{props.username}</h2>
					<div id="title">Translation History</div>
				</div>
			</div>
			<div id="translations">
				{translations &&
					props.username &&
					translations.map((translation, index) => (
						<div key={index} className="translation-items">
							"{translation}"
						</div>
					))}
			</div>
		</div>
	)
}

export default Profile
