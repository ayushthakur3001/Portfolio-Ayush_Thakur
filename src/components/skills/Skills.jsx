import './skills.scss'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {useState} from 'react'
const Skills = () => {

    
    const [currentSlide , setCurrentSlide] = useState(0);
    const dat = [
        {
        id:"1",
        icon:"./assets/mobile.png",
        title:"Web Design",
        desc:"Perfect Web Designing",
        img: "./assets/quizz.png"
        },

        {
            id:"2",
            icon:"./assets/mobile.png",
            title:"Mobile Application",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quos illo sint amet, beatae est voluptatibus.",
            img: "./assets/box3.png"
        },
        {
            id:"3",
            icon:"./assets/mobile.png",
            title:" Application",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quos illo sint amet, beatae est voluptatibus.",
            img: "./assets/facebook.png"
        },
            


    ];

    const handleClick = (way)=>{
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2)
        : setCurrentSlide(currentSlide < dat.length -1  ? currentSlide+1 : 0);
        
    };

    return (
        <div className="skills" id="skills">
        
            <div className="slider" 
            style={{transform: `translateX(-${currentSlide * 100}vw)`}}
            
            >
                {dat.map((d) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt="" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>
                                
                            </div>
                            </div>
                        <div className="right">
                            <img 
                            src={d.img}
                            alt=""
                             />
                        </div>
                        </div>
                    </div>

                ))
                
            }
            </div>
            
            
            <ChevronRightIcon className="arrow lef" onClick={() => handleClick("left")} />
            <ChevronRightIcon className="arrow righ" onClick={() => handleClick()} />
        </div>
    )
}

export default Skills
