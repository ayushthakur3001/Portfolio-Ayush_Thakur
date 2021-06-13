import './list.scss'
const List = ({title, active, setSelected, id}) => {
    return (
        <li className={active ? "projectlist active" : "projectlist" }
        onClick={()=>setSelected(id)}
        >
            {title}
        </li>
    )
}

export default List
