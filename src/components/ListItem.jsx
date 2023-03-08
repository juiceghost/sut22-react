function ListItem({ name, role, floor }) {
    //console.log(props)
    //const myObj = { name: "Krille", role: "Slacker" }
    //const { name, role } = myObj;
    // name == "Krille", role == "Teacher"
    //const { name, role } = props;
    return (
        <li>
            <h4>{name}</h4>
            <p>{role}{floor ? ` on the ${floor} floor` : ""} </p>
            <br></br>
        </li>
    )
}

export default ListItem;