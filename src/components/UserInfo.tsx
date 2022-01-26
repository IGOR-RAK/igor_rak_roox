import React from 'react';
import { IUser } from "../models/IUser";



interface IUserInfo {
    user:IUser
}


const UserInfo:React.FC<IUserInfo> =({user})=> {

  
  return (
    <div className='user-info'>
    <div>
        <p>Name</p>
        <input type="text" value={user?.name} readOnly={true}/>
    </div>
    <div>
    <p>User Name</p>
        <input type="text" value={user?.username} readOnly={true}/>
        </div>
    <div>
        <p>E-mail</p>
        <input type="text" value={user?.email} readOnly={true}/>
    </div>
    <div>
        <p>Street</p>
        <input type="text" value={user?.address?.street} readOnly={true}/>
    </div>
    <div>
        <p>City</p>
        <input type="text" value={user?.address?.city} readOnly={true}/>
    </div>
    <div>
        <p>Zipe Code</p>
        <input type="text" value={user?.address?.zipcode} readOnly={true}/>
    </div>
    <div>
        <p>Phone</p>
        <input type="text" value={user?.phone} readOnly={true}/>
    </div>
    <div>
        <p>Website</p>
        <input type="text" value={user?.website} readOnly={true}/>
    </div>
    <div>
        <p>Comment</p>
        <textarea   readOnly={true}/>
    </div>
     
    </div>
  );
}

export  {UserInfo};