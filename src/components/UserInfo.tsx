import React from 'react';
import { IUser } from "../models/IUser";



interface IUserInfo {
    user:IUser
}




const UserInfo:React.FC<IUserInfo> =({user})=> {

   
  return (
    <div className='user-info'>
    <div className='user-info__item'>
        <p className='user-info__subtitle'>Name</p>
        <input className='user-info__input' type="text" value={user?.name} readOnly={true}/>
    </div>
    <div  className='user-info__item'>
    <p className='user-info__subtitle'>User Name</p>
        <input className='user-info__input' type="text" value={user?.username} readOnly={true}/>
        </div>
    <div  className='user-info__item'>
        <p className='user-info__subtitle'>E-mail</p>
        <input className='user-info__input' type="text" value={user?.email} readOnly={true}/>
    </div>
    <div  className='user-info__item'>
        <p className='user-info__subtitle'>Street</p>
        <input className='user-info__input' type="text" value={user?.address?.street} readOnly={true}/>
    </div>
    <div className='user-info__item'>
        <p className='user-info__subtitle'>City</p>
        <input className='user-info__input' type="text" value={user?.address?.city} readOnly={true}/>
    </div>
    <div className='user-info__item'>
        <p className='user-info__subtitle'>Zip Code</p>
        <input className='user-info__input' type="text" value={user?.address?.zipcode} readOnly={true}/>
    </div>
    <div className='user-info__item'>
        <p className='user-info__subtitle'>Phone</p>
        <input className='user-info__input' type="text" value={user?.phone} readOnly={true}/>
    </div>
    <div className='user-info__item'>
        <p className='user-info__subtitle'>Website</p>
        <input className='user-info__input' type="text" value={user?.website} readOnly={true}/>
    </div>
    <div className='user-info__item'>
        <p className='user-info__subtitle'>Comment</p>
        <textarea className='user-info__textarea'  readOnly={true}/>
    </div>
     
    </div>
  );
}

export  {UserInfo};