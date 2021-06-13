import './code.scss'
const Code = () => {

    const data = [
        {
            id: 1,
            name: "HackerRank",
            img: "./assets/hackerrank.png",
            icon: "./assets/linked.png",
            desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            feature: false,

        },
        {
            
            id: 2,
            name: "Codechef",
            img: "./assets/chef.png",
            icon: "./assets/linked.png",
            desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            feature: "true",

        },
        {
            id: 3,
            name: "Geeks For Geeks",
            img: "./assets/gfg.png",
            icon: "./assets/linked.png",
            desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            feature: false,

        },
    ]
    return (
        <div className="code" id="code">
            <h1>Coding Profiles</h1>
            <div className="container">
            {data.map((d) =>(

            
            
                <div className={d.feature ? "card feature" : "card" }>
                    <div className="top">
                        <img src="./assets/arro1.png" alt="" className="left" />
                        <img src={d.img} alt="" className="user" />
                        <img src={d.icon} alt="img.." className="right" />
                    </div>
                    <div className="center">
                    {d.desc}
                    </div>
                    <div className="bottom">
                        <h3>{d.name}</h3>
                        
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Code
