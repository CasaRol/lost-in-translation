//Styling imports
import "../App.css"
import "../assets/styles/Login.css"
import "../assets/styles/InputBox-common.css"
//Functional imports
import { isStorageAvailable, setStorage } from "../utils/localStorage"
import { useState } from "react"

function Login(props) {
	const [enteredName, setEnteredName] = useState("")
	const [isEnteredNameEmpty, setIsEnteredNameEmpty] = useState(false)

	function onEnteredNameChange(e) {
		setEnteredName(e.target.value.trim())
	}

	function onButtonClicked() {
		if (enteredName.length === 0) {
			setIsEnteredNameEmpty(true)
		} else {
			setIsEnteredNameEmpty(false)
			if (isStorageAvailable) setStorage("username", enteredName)
			props.loginClicked(enteredName)
		}
	}

	return (
		<div className="input-container">
			<div className="input-box">
				<input className="input-text" type="text" placeholder="What's your name?" onChange={onEnteredNameChange}></input>
				<button type="button" onClick={onButtonClicked}>
					Login
				</button>
			</div>
			{isEnteredNameEmpty && <div className="error">User name must not be empty!</div>}
			<div className="purple-line"></div>
		</div>
	)
}

export default Login
