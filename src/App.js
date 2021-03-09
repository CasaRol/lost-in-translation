//Styling imports
import "./App.css"
//functional imports
import { useEffect, useState } from "react"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { getStorage, clearStorage } from "./utils/localStorage"
//Component imports
import AppHeader from "./components/AppHeader.js"
import Translation from "./components/Translation"
import Login from "./components/Login"
import Profile from "./components/Profile"
import NotFound from "./components/NotFound"

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

  function requireAuth(destination) {
    if (username === false) {
      return (<Login loginClicked={handleLoginClicked} />)
    } else {
      return destination
    }
  }

  return (
    <Router>
      <div className="App">
        <AppHeader username={username} updateUsername={setUsername} logoutClicked={handleLogoutClicked} />

        <Switch>
          <Route exact path="/">
            {requireAuth(<Translation />)}
          </Route>
          <Route exact path="/login">
            <Login loginClicked={handleLoginClicked} />
          </Route>
          <Route exact path="/profile">
            {requireAuth(<Profile username={username} updateUsername={setUsername} />)}
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>

      </div>
    </Router>
  )
}

export default App
