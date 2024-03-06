import { React } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/shared/Login';
import Register from './pages/shared/Register';
import Home from './pages/shared/home';

const App = () => {
 
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link for="/">Home</Link>
              </li>
              <li>
                <Link for="/login">Login</Link>
                </li>
                <li>
                <Link for="/register">Register</Link>
                </li>
                </ul>
              </nav>

              <hr />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
