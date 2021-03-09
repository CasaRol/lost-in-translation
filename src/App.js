import { useEffect, useState } from "react"
import AppHeader from "./components/AppHeader.js"
import Login from "./components/Login.js"
import "./App.css"
import { getStorage, clearStorage } from "./utils/localStorage"
import Translation from "./components/Translation"
import Profile from "./components/Profile.js"

function App() {
  const [username, setUsername] = useState("")

  function handleLoginClicked() {
    setUsername(getStorage("username"))
  }

  function handleLogoutClicked() {
    clearStorage()
    setUsername(getStorage("username"))
  }

  useEffect(() => {
    setUsername(getStorage("username"))
  }, [username])

  return (
		<div className="App">
			<AppHeader username={username} updateUsername={setUsername} logoutClicked={handleLogoutClicked} />
			<Login loginClicked={handleLoginClicked} />
			<Translation></Translation>
			<Profile username={username} updateUsername={setUsername} />
		</div>
  )
}

export default App
