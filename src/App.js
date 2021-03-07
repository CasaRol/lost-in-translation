import { useEffect, useState } from "react"
import AppHeader from "./components/AppHeader.js"
import Login from "./components/Login.js"
import "./App.css"
import { getStorage } from "./utils/localStorage"

function App() {
	const [username, setUsername] = useState("")

	function handleLoginClicked() {
		setUsername(getStorage("username"))
	}

	useEffect(() => {
		setUsername(getStorage("username"))
	}, [])

	return (
		<div className="App">
			<AppHeader username={username} updateUsername={setUsername}/>
			<Login loginClicked={handleLoginClicked} />
		</div>
	)
}

export default App
