import Item from './item';
import {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {getData} from './../../../redux/actions/index';
import {useSelector, useState} from 'react-redux';
import FormUser from './form_edit';

function ListUser(){
    let dispatch = useDispatch();
    let users = useSelector((state)=>state.users);
    let errMessage = useSelector((state)=>state.errMessage);
    let display = useSelector((state)=>state.display);
    let user = useSelector((state)=>state.user);

    if(errMessage){
        alert(errMessage);
    }
    
    useEffect(function(){
        dispatch(getData());
    }, []);

    let datas = users.map((user, index)=>{
        return <Item {...user} index={index}/>
    })
    return(
    <table class="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
           {datas}
        </tbody>
      <div style={{display: display}} className="loader"></div>
      <FormUser {...user}/>
    </table>
    )
}

export default ListUser;