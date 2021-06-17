function Item(props){
    let {index, id, name, email, phone} = props;
    return(
        <tr>
            <th scope="row">{index+1}</th>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>
                <button type="button" class="btn btn-primary">Edit</button>
                <button type="button" class="btn btn-danger">Delete</button>
            </td>
        </tr>
    )
}

export default Item;