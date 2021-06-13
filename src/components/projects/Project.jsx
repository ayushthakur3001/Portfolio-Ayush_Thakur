import './project.scss'
import List from './List'
import { useState, useEffect } from 'react'
import { web, games, html } from "../data"
const Project = () => {
    const [selected, setSelected] = useState(1);
    const [data, setData] = useState([]);
    const list = [
        {
            id: 1,
            title: "Web App",
        },
        {
            id: 2,
            title: "Games",
        },
        {
            id: 3,
            title: "Basic CSS",
        },
        

    ]

    useEffect(() => {
        switch (selected) {
            case 1:
                setData(web);
                break;
            case 2:
                setData(games);
                break;
            case 3:
                setData(html);
                break;
            
            default:
                setData(web);
        }

    }, [selected])
    return (
        <div className="project" id="project">
            <h1>Projects</h1>
            <ul>
                {list.map(item => (
                    <List title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id} />
                ))}
            </ul>
            <div className="container">
                {data.map(d => (
                    <a href={d.link} >
                    <div className="item">
                        <img src={d.img} alt="" />
                        <h3>{d.title}</h3>

                    </div>
                    </a>
                    

                ))}


            </div>




        </div>
    )
}

export default Project
