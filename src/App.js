import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Alert from './components/Alert'
import About from './components/About'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      message,
      type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#121028'
      showAlert('Dark Mode has been successfully enabled', 'success')
    } else {
      setMode('light')
      document.body.style.backgroundColor = '#fff'
      showAlert('Light Mode has been successfully enabled', 'success')
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About mode={mode} showAlert={showAlert} />
            </Route>

            <Route exact path="/">
              <TextForm
                heading="TextUtils -  Word counter and text manupulation"
                mode={mode}
                showAlert={showAlert}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default App
