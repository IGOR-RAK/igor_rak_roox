import React from 'react';
import {IUser} from "../models/IUser";
import {Link} from "react-router-dom";

interface IUserItem {
    user:IUser
}

const UserItem:React.FC<IUserItem> =({user})=> {   
    return (
    <div className='user-item'>
        <div className='user-item__left'>
            <div className='user-item__name' ><p className='user-item__subtitle'>Ф.И.О:</p>  <p>  {user?.name}</p></div>
            <div className='user-item__city'><p className='user-item__subtitle'> город:</p>  <p>  {user?.address?.city}</p></div>
            <div className='user-item__company'><p className='user-item__subtitle'>компания:</p>  <p>  {user?.company?.name}</p></div>
        </div>
        <div className='user-item__right'>
            <button className='user-item__btn'><Link className='user-item__to' to={`/user/${user.id}`}>Подробнее</Link></button> 
        </div>    
    </div>
  );
}
export  {UserItem};