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
  
  const {users,error,isLoading} = useTypedSelector((state) => state.users);

  return (
    <>
     <h2 className="users__title">Список пользователей</h2>

     {error?<div>{error}</div>:
      isLoading?<div>
       <Spin/>   
      </div>:          
        <UserList users={users}/>      
     }

      
    </>
  );
};

export  {Users};