import React from 'react'
import './about.scss'
import spiral from '../assets/spiral.png'

function About() {
    return (
        <div className="about" id="about">
            <div className="left">
                <h1>About Me</h1>
                <div className="imgContainer">
                    <img src={spiral} alt="img.." />
                </div>
                <div className="container">
                    
                    <p>
                        🎓 I’m a junior pursuing my <span> Bachelors in Information Technology</span> from UIIT Shimla.
                    </p>
                    <p>
                         I am passionate about  Web Dev ,<span> Frontend Development & UI Designing</span>.
                        
                    </p>
                    <p>
                        Competitive Coding is something which  I love to do.I have  knowledge of <span> Data Structure & Algorithms</span> such as Linked Lists , Stack & Queue, Backtracking.
                    
                    </p>
                    
                    <p>
                     I enjoy learning new things.
                    </p>
                </div>


            </div>

            <div className="right">
            <h1>My Skills</h1>
                <div className="skill">
                    <p>Web Development</p>
                    
                    <li><h3>css</h3>
                    <span className="bar"><span className="css"></span></span>
                    </li>
                    <li><h3>react</h3>
                    <span className="bar"><span className="react"></span></span>
                    </li>
                    <li><h3>javascript</h3>
                    <span className="bar"><span className="javascript"></span></span>
                    </li>
                    <p>Competitive Coding</p>
                    <li><h3>c++</h3>
                    <span className="bar"><span className="cplus"></span></span>
                    </li>
                    <li><h3>c</h3>
                    <span className="bar"><span className="css"></span></span>
                    </li>
                </div>

            </div>

        </div>
    )
}

export default About
