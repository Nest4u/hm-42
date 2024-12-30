import About from './components/About'
import Home from './components/Home'
import Contacts from './components/Contact'
import { BrowserRouter, NavLink,Routes,Route } from 'react-router-dom'
import './App.css'


function App() {
  

  return (
    <BrowserRouter>
    <nav>
        <NavLink
            to="/"
            style={({ isActive }) => ({
                color: isActive ? 'blue' : 'black',
                textDecoration: isActive ? 'underline' : 'none',
            })}
        >
            Home
        </NavLink>
        {' | '}
        <NavLink
            to="/about"
            style={({ isActive }) => ({
                color: isActive ? 'blue' : 'black',
                textDecoration: isActive ? 'underline' : 'none',
            })}
        >
            About
        </NavLink>
        {' | '}
        <NavLink
            to="/contact"
            style={({ isActive }) => ({
                color: isActive ? 'blue' : 'black',
                textDecoration: isActive ? 'underline' : 'none',
            })}
        >
            Contact
        </NavLink>
    </nav>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />
    </Routes>
</BrowserRouter>
   
  )
}

export default App
