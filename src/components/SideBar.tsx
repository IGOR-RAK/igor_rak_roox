import React from 'react';
import { useActions } from "../hooks/useActions";
import { useParams } from "react-router-dom";


const SideBar:React.FC =() => {
  const {sortByCity,sortByCompanyName} = useActions();
  const{id} =useParams()
 
  return (
    <>
     <h3>Сортировка</h3>
     {id?<div>
        <button >по городу</button>
        <button >по компании</button>
      </div>:
      <div>
       <button onClick={()=>{sortByCity()}}>по городу</button>
       <button onClick={()=>{sortByCompanyName()}}>по компании</button>
      </div>}
    
    </>
  );
}

export  {SideBar};