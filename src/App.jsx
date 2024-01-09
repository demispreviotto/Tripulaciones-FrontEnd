import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header/Header'
import Footer from './components/layout/Footer/Footer'
import Home from './components/pages/Home/Home'
import Register from './components/pages/Register/Register'
import Login from './components/pages/Login/Login'
import About from './components/pages/About/About'

function App() {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  )
}

export default App
