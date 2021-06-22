import './menu.scss'
const Menu = ({menuOpen , setMenuOpen}) => {
const clos = () =>{
setMenuOpen(false)

}
    return (
        <div className={"menu "+ (menuOpen && "active")}>
            <ul>
                <li onClick={clos}>
                    <a href="#intro">Home</a>
                </li>
                <li  onClick={clos}>
                    <a href="#project">Projects</a>
                </li>
                <li  onClick={clos}>
                    <a href="#skills">Works</a>
                </li>
                <li  onClick={clos}>
                    <a href="#code">Coding .Pro</a>
                </li>
                
                <li onClick={clos} >
                    <a href="#contact">Contact Me</a>
                </li>
            </ul>
        </div>
    )
}

export default Menu
