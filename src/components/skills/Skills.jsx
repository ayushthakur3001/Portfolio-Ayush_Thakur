import './skills.scss'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useState } from 'react'
const Skills = () => {


    const [currentSlide, setCurrentSlide] = useState(0);
    const dat = [
        {
            id: "1",
            icon: "./assets/calculator.png",
            title: "Calculator",
            l1: "Calculator App with mode change feature.",
            l2:"  'Light' ,'Dark' & 'Glass' mode using CSS.",
            l3:"  Used React Hooks - 'useState'.",
            l4:"  Map function to render different buttons.",
            l5:"  Calculation using 'eval' function in javascript.",

            
        },

        {
            id: "2",
            icon: "./assets/weather.png",
            title: "Weather App",
            l1: " API based Weather App.",
            l2:"API (Application Programming Interface).",
            l3:" Used pure Vanilla Javascript. ",
            l4:"Responsive for all ranged devices.",
            l5:"Data taken from OpenWeatherMap.",
            
        },
        {
            id: "3",
            icon: "./assets/tictac.png",
            title: "Tic Tac Toe",
            l1: "2 Player Online Game.",
            l2:"Used Material-UI for React. ",
            l3:" Used React Hooks - 'useState','useEffect'.",
            l4:"Logic for checking winner.",
            l5:"",
            
        },



    ];

    const handleClick = (way) => {
        way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
            : setCurrentSlide(currentSlide < dat.length - 1 ? currentSlide + 1 : 0);

    };

    return (
        <div className="skills" id="skills">

            <div className="slider"
                style={{ transform: `translateX(-${currentSlide * 100}vw)` }}

            >
                {dat.map((d) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt="img.." />
                                    </div>
                                    <h2>{d.title}</h2>


                                </div>
                            </div>
                            <div className="right">
                                <ol>
                                    <li>{d.l1}</li>
                                    <li>{d.l2}</li>
                                    <li>{d.l3}</li>
                                    <li>{d.l4}</li>
                                    <li>{d.l5}</li>

                                </ol>
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
