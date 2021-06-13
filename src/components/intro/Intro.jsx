import './intro.scss'
import {init} from 'ityped'
import {useEffect, useRef } from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const Intro = () => {
    const textRef = useRef();
    useEffect(() => {
       init(
           textRef.current,{
               showCursor: true,
               backDelay:1500,
               backSpeed:60,
               strings: ['Frontend Developer' , "UI Designer", 'Competitive Programmer']
           }
       )
    }, [])
    return (

        <div className="intro" id="intro">
         <div className="left">
             <div className="imgContainer">
                 <img src= "assets/myImg.png" alt="img.." />
             </div>
         </div>
         <div className="right">
            <div className="wrapper">
                <h2>Hi There, I'm</h2>
                <h1>Ayush Thakur</h1>
                <h3> <span ref={textRef}></span></h3>

            </div>
            <a href="#project">
                <ExpandMoreIcon className="downArrow" />
            </a>
            </div>
        </div>
    )
}

export default Intro
