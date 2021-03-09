import "../App.css"
import "../assets/styles/AppHeader.css"
import logo from "../assets/images/stylingImages/Logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserCircle as avatar } from "@fortawesome/free-solid-svg-icons"
import { getStorage } from "../utils/localStorage"
import { Link } from 'react-router-dom'

function AppHeader(props) {
	const userIcon = (

		<div id="user-icon" >
			<Link to="/profile" >
				<button type="button" id="username">{getStorage("username")}</button>
				<FontAwesomeIcon id="icon" icon={avatar} size="2x" inverse />
			</Link>
		</div >

	)
	const logoutIcon = (
		<>
			<button type="button" id="logout" onClick={props.logoutClicked}>
				Logout
			</button>
		</>
	)

	return (
		<>
			<header className="headerMain">
				<div className="headerTop">
					<div className="logoSplash">
						<img className="logoRobot" src={logo} alt="logoRobot" />
					</div>
					<div className="headerTitle">Lost in Translation</div>
					{props.username && userIcon}
					{props.username && logoutIcon}
				</div>
				<hr />
			</header>
		</>
	)
}

export default AppHeader
