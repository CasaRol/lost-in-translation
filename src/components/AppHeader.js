import "../App.css"
import "../assets/styles/AppHeader.css"
import logo from "../assets/images/stylingImages/Logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserCircle as avatar } from "@fortawesome/free-solid-svg-icons"
import { getStorage } from "../utils/localStorage"
import { useEffect } from "react";

function AppHeader({ username, updateUsername }) {
	const userIcon = (
		<>
			<div className="userName">{getStorage("username")}</div>
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
					{username && userIcon}
				</div>
				<hr />
			</header>
		</>
	)
}

export default AppHeader
