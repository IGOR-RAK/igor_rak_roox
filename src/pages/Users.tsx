import React from "react";
import { UserList } from "../components/UserList";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";
import { Spin } from "../components/ui/Spin";



const Users: React.FC = () => {
  const {fetchUsers} = useActions();
  React.useEffect(() => {   
    fetchUsers()     
    }
  , []);
  
  const {users,error,isLoading} = useTypedSelector((state) => state.users);  // 
   
  return (
    <>
     {error?null:<h2 className="users__title">Список пользователей</h2>}

     {error?<div>{error}</div>:
      isLoading?<div>
       <Spin/>   
      </div>:          
        <UserList users={users}/>      
     }
     <div className="users__info">
       <div>        
       {users.length===1?"Найден ": "Найдено "} 
       {users.length} 
       {users.length===1?" пользователь":
        users.length>1&&users.length<5?" пользователя":" пользователей"
       }
     
     </div>
     </div>
      
    </>
  );
};

export  {Users};