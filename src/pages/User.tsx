import React from "react";
import { useParams } from "react-router-dom";
import { IUser } from "../models/IUser";
import UserService from "../api/UserService"
import { EditUserInfo } from "../components/EditUserInfo";
import { UserInfo } from "../components/UserInfo";
import { Spin } from "../components/ui/Spin";



const User: React.FC = () => {
    const{id} = useParams()
    const [user,setUser] = React.useState<IUser>({} as IUser)
    const [isLoading,setIsLoading] = React.useState(false)
    const [error,setError] = React.useState<string|null>(null)
    const [isEdit,setIsEdit] = React.useState(false)

    React.useEffect(()=>{
        async function fetchUser() {
            try {             
              setIsLoading(true)
              const response = await UserService.getUser(Number(id));
              setUser(response.data)
            } catch (error) {                         
               setError("При попытке соединения с сервером возникла ошибка")              
            } 
             finally {setIsLoading(false)}           
        }

        fetchUser()

    },[id])

  return (
    <>
     {error?null:<div className="user-edit__title">
       <h2>Профиль пользователя</h2>
       <button className="user-edit__btn" onClick={()=>{setIsEdit(prev=>!prev)}}>Редактировать</button>
       </div>}

     {error?<div>{error}</div>:
      isLoading?<div>
       <Spin/>    
      </div>:
        isEdit?    
        <EditUserInfo user={user}/>:<UserInfo user={user}/>     
     }
    
    </>
  );
};

export  {User};