import './code.scss'
const Code = () => {

    const data = [
        
        {
            id: 1,
            name: "HackerRank",
            img: "../assets/hackerrank.png",
            icon: "../assets/linked.png",
            desc:"5⭐-> Problem Solving ",
            feature: false,
            link:'https://www.hackerrank.com/ayushthakur3001',
            ilink:"https://www.linkedin.com/company/hackerrank/"

            

        },
        {
            
            id: 2,
            name: "Codechef",
            img: "./assets/chef.png",
            icon: "./assets/linked.png",
            desc:"3⭐ Max Rating->1682",
            feature: true,
            link:"https://www.codechef.com/users/ayushthakur001",
            ilink:"https://www.linkedin.com/company/codechef/"

        },
        
        {
            id: 3,
            name: "Geeks For Geeks",
            img: "./assets/gfg.png",
            icon: "./assets/linked.png",
            desc:"150+ Problems Solved on -->Linked List,Stack and Queues, Array, Strings",
            feature: false,
            link:"https://auth.geeksforgeeks.org/user/ayushthakur3001",
            ilink:"https://www.linkedin.com/company/geeksforgeeks/"

        },
    ]
    return (
        <div className="code" id="code">
            <h1>Coding Profiles</h1>
            <div className="container">
            {data.map((d) =>(

            
            
                <div className={d.feature ? "card feature" : "card" }>
                    <div className="top">
                        <img src="./assets/arro1.png" alt="im." className="left" />
                        
                        <img src={d.img} alt="" className="user" />
                        
                        <a href={d.ilink}>
                        <img src={d.icon} alt="img.." className="right" />
                        </a>
                    </div>
                    <div className="center">
                    {d.desc}
                    </div>
                    <a href={d.link}>
                    <div className="bottom">
                        <h3>{d.name}</h3>
                        
                    </div>
                    </a>
                </div>
            

                ))}
                
            </div>
            
        </div>
    )
}

export default Code
