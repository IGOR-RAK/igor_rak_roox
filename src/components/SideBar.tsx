import React from 'react';
import { useActions } from "../hooks/useActions";
import { useParams } from "react-router-dom";


const SideBar:React.FC =() => {
  const {sortByCity,sortByCompanyName} = useActions();
  const{id} =useParams()
 
  return (
    <div className='sidebar__group'>
     <h3 className='sidebar__title'>Сортировка</h3>
     {id?<div>
        <button className='sidebar__btn'>по городу</button>
        <button className='sidebar__btn'>по компании</button>
      </div>:
      <div>
       <button className='sidebar__btn' onClick={()=>{sortByCity()}}>по городу</button>
       <button className='sidebar__btn' onClick={()=>{sortByCompanyName()}}>по компании</button>
      </div>}
    
    </div>
  );
}

export  {SideBar};