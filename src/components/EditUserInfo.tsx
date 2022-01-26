import React from 'react';
import { IUser } from "../models/IUser";
import { useForm } from "react-hook-form";



interface IEditUserInfo {
    user:IUser
}


const EditUserInfo:React.FC<IEditUserInfo> =({user})=> {
    const {
        register,
        handleSubmit,        
        formState: { errors }
      } = useForm<IUser>();
    
      const onSubmit = (data: IUser) => {   
          const obj = {...data,company:{name:user?.company?.name},id:user?.id}      
          const json = JSON.stringify(obj);
          console.log(json);
      };
  return (
    <>
    <h3>EditUserInfo</h3>
    
    <form className="form" onSubmit={handleSubmit(onSubmit)} >
      <div>
      <p>Name</p>
      <input
       className={errors?.name?.type === "required"?"form__input--error":"form__input"}
        defaultValue={user?.name}
        {...register("name", {required: true})} />
     </div>

     <div>
      <p>User Name</p>
      <input
       className={errors?.username?.type === "required"?"form__input--error":"form__input"}
        defaultValue={user?.username}
        {...register("username", {required: true})} />
     </div>

     <div>
      <p>E-mail</p>
      <input
       className={errors?.email?.type === "required"?"form__input--error":"form__input"}
        defaultValue={user?.email}
        {...register("email", {required: true})} />
     </div>

     <div>
      <p>Street</p>
      <input
       className={errors?.address?.street?.type === "required"?"form__input--error":"form__input"}
        defaultValue={user?.address?.street}
        {...register("address.street", {required: true})} />
     </div>

     <div>
      <p>City</p>
      <input
       className={errors?.address?.city?.type === "required"?"form__input--error":"form__input"}
        defaultValue={user?.address?.city}
        {...register("address.city", {required: true})} />
     </div>

     <div>
      <p>Zipcode</p>
      <input
       className={errors?.address?.zipcode?.type === "required"?"form__input--error":"form__input"}
        defaultValue={user?.address?.zipcode}
        {...register("address.zipcode", {required: true})} />
     </div>
     
     <div>
      <p>Phone</p>
      <input
       className={errors?.phone?.type === "required"?"form__input--error":"form__input"}
        defaultValue={user?.phone}
        {...register("phone", {required: true})} />
     </div>

     <div>
      <p>Website</p>
      <input
       className={errors?.website?.type === "required"?"form__input--error":"form__input"}
        defaultValue={user?.website}
        {...register("website", {required: true})}
         />
     </div>

     <div>
        <p>Comment</p>
        <textarea
            className={errors?.comments?.type === "required"?"form__input--error":"form__input"}
            defaultValue={user?.comments}
            {...register("comments", {required: true})}
        />
    </div>

      <input type="submit"   value="Отправить"/>
    </form>       
    </>
  );
}

export  {EditUserInfo};