import "../App.css"
import "../assets/styles/AppHeader.css"
import logo from "../assets/images/stylingImages/Logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserCircle as avatar } from "@fortawesome/free-solid-svg-icons"
import { getStorage, clearStorage } from "../utils/localStorage"
import { useEffect } from "react"

function AppHeader({ username, updateUsername }) {
	let isProfileLoaded = true
	const userIcon = (
		<>
			<div id="username">{getStorage("username")}</div>
			<FontAwesomeIcon icon={avatar} size="2x" inverse />
		</>
	)

	useEffect(() => {
		window.addEventListener("storage", () => {
			updateUsername(getStorage("username"))
		})
	})

	return (
		<>
			<header className="headerMain">
				<div className="headerTop">
					<div className="logoSplash">
						<img className="logoRobot" src={logo} alt="logoRobot" />
					</div>
					<div className="headerTitle">Lost in Translation</div>
					{username && !isProfileLoaded && userIcon}
					{isProfileLoaded && <div id="logout" onClick={clearStorage}>Logout</div>}
				</div>
				<hr />
			</header>
		</>
	)
}

export default AppHeader
