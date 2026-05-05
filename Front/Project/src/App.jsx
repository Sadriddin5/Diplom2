import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Link } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)
const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }
  return (
    <>
           <section className='headerSec'>
            <div className="headerMain">
              
        <div className="logo">
          <h2>Олег Мелехов</h2>
          <p>Заслуженный художник России</p>
        </div>
        <div className={`burger-menu ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`links ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/home" onClick={closeMenu} >Главная</Link>
          <Link to="/galery" onClick={closeMenu}>Галерея</Link>
          <Link to="/merch" onClick={closeMenu}>Мерч</Link>
          <Link to="/bio" onClick={closeMenu}>Биография</Link>
          <Link to="/coll" onClick={closeMenu}>Коллекция</Link>
          <Link to="/mus" onClick={closeMenu}>Музей</Link>
          <Link to="/events" onClick={closeMenu}>События</Link>
          <Link to="/kont" onClick={closeMenu}>Контакты</Link>
        </div>
            </div>
      </section>
      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
    </>
  )
}

export default App
