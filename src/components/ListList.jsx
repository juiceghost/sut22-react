import ListItem from '../components/ListItem';

function ListList({ data }) {
    // ...
    return (
        <ul>
            {data.work.map(item => (
                <ListItem key={item.name + item.role} {...item} />
            ))}
        </ul>
    );
}

export default ListList;