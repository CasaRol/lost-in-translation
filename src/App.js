import { useEffect, useState } from "react"
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { getStorage } from "./utils/localStorage"

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

  useEffect(() => {
    setUsername(getStorage("username"))
  }, [])

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
        <AppHeader username={username} updateUsername={setUsername} />

        <Switch>
          <Route exact path="/">
            {requireAuth(<Translation />)}
          </Route>
          <Route exact path="/login">
            <Login loginClicked={handleLoginClicked} />
          </Route>
          <Route exact path="/profile">
            {requireAuth(<Profile />)}
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
