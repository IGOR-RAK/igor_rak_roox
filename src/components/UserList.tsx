import React from 'react';
import { IUser } from "../models/IUser";
import { UserItem } from './UserItem';

interface IUserList {
    users:IUser[]
}

const UserList:React.FC<IUserList> =({users})=> {
  return (
    <div className='user-list'>
        {users.map(user=> <UserItem key={user.id} user={user}/>)}
    </div>
  );
}
export  {UserList};