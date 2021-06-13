import Topbar from './components/topbar/Topbar'
import Intro from './components/intro/Intro'
import Project from './components/projects/Project'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
import Menu from './components/menu/Menu'
import Code from './components/coding/Code'
import './app.scss'
import {useState} from 'react'

const App = () => {
  const [menuOpen , setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro/>
        <Project/>
        <Skills/>
        <Code/>
        <Contact/>
      </div>
    </div>
  )
}

export default App

