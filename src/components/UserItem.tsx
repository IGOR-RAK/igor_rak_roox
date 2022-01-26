import React from 'react';
import {IUser} from "../models/IUser";
import {Link} from "react-router-dom";

interface IUserItem {
    user:IUser
}

const UserItem:React.FC<IUserItem> =({user})=> {   
    return (
    <div className='user-item'>
        <div>
            <div><p>Ф.И.О:</p><p>{user?.name}</p></div>
            <div><p>город:</p><p>{user?.address?.city}</p></div>
            <div><p>компания:</p><p>{user?.company?.name}</p></div>
        </div>
        <button><Link to={`/user/${user.id}`}>Подробнее</Link></button>     
    </div>
  );
}
export  {UserItem};