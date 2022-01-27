import React from 'react';
import { IUser } from "../models/IUser";
import { useForm } from "react-hook-form";

//Использую библиотеку react-hook-form,чтобы избежать лишних перерендеров и организовать  валидацию формы

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
    <div className='user-info'>  
        <form className="form" onSubmit={handleSubmit(onSubmit)} >
      <div className='user-info__item'>
      <p className='user-info__subtitle'> Name</p>
      <input 
       className={errors?.name?.type === "required"?"form__input--error":"form__input"}
        defaultValue={user?.name}
        {...register("name", {required: true})} />
     </div>

     <div className='user-info__item'>
      <p className='user-info__subtitle'>User Name</p>
      <input 
       className={errors?.username?.type === "required"?"form__input--error":"form__input"}
        defaultValue={user?.username}
        {...register("username", {required: true})} />
     </div>

     <div className='user-info__item'>
      <p className='user-info__subtitle'>E-mail</p>
      <input 
       className={errors?.email?.type === "required"?"form__input--error":"form__input"}
        defaultValue={user?.email}
        {...register("email", {required: true})} />
     </div>

     <div className='user-info__item'>
      <p className='user-info__subtitle'>Street</p>
      <input 
       className={errors?.address?.street?.type === "required"?"form__input--error":"form__input"}
        defaultValue={user?.address?.street}
        {...register("address.street", {required: true})} />
     </div>

     <div className='user-info__item'>
      <p className='user-info__subtitle'>City</p>
      <input 
       className={errors?.address?.city?.type === "required"?"form__input--error":"form__input"}
        defaultValue={user?.address?.city}
        {...register("address.city", {required: true})} />
     </div>

     <div className='user-info__item'>
      <p className='user-info__subtitle'>Zip Code</p>
      <input 
       className={errors?.address?.zipcode?.type === "required"?"form__input--error":"form__input"}
        defaultValue={user?.address?.zipcode}
        {...register("address.zipcode", {required: true})} />
     </div>
     
     <div className='user-info__item'>
      <p className='user-info__subtitle'>Phone</p>
      <input 
       className={errors?.phone?.type === "required"?"form__input--error":"form__input"}
        defaultValue={user?.phone}
        {...register("phone", {required: true})} />
     </div>

     <div className='user-info__item'>
      <p className='user-info__subtitle'>Website</p>
      <input 
       className={errors?.website?.type === "required"?"form__input--error":"form__input"}
        defaultValue={user?.website}
        {...register("website", {required: true})}
         />
     </div>

     <div className='user-info__item'>
        <p className='user-info__subtitle'>Comment</p>
        <textarea className='user-info__textarea'           
            defaultValue={user?.comment}
            {...register("comment")}
        />
    </div>

      <input
         className={Object.keys(errors).length === 0?"user-info__submit":"user-info__submit--error"}      
       type="submit" 
         value="Отправить"/>
    </form>       
    </div>
  );
}

export  {EditUserInfo};