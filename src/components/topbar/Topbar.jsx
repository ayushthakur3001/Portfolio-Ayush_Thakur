
import './topbar.scss'
import logo from './logo.png'

import {Person, Mail } from '@material-ui/icons'

const Topbar = ({menuOpen , setMenuOpen}) => {
    
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro">
                        <img className="logo" src={logo} alt="img.."/>
                    </a>
                    <div className="itemContainer">
                        <div className="num">
                            <Person className="icon" />
                            <span >858080****</span>
                            </div>
                        </div>
                        <div className="itemContainer">
                            <div className="mail">
                            <Mail className="icon" />
                            <span >ayushthakur3001@gmail.com</span>
                            </div>
                        </div>
                    
                </div>
                
                <div className="right">
                    <div className="hamburger" onClick={()=>{
                        setMenuOpen(!menuOpen)
                    }}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Topbar
