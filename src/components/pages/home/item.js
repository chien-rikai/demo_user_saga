import { useDispatch } from 'react-redux';
import {getItemUser} from './../../../redux/actions/index';

function Item(props){
    let dispatch = useDispatch();

    let {index, id, name, email, phone} = props;
    function handlerEdit(){
        console.log(id);
        dispatch(getItemUser(id))
    }
    return(
        <tr>
            <th scope="row">{index+1}</th>
            <td>{name}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>
            <button onClick={handlerEdit} type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                Edit
            </button>
                <button type="button" class="btn btn-danger">Delete</button>
            </td>
        </tr>
    )
}

export default Item;