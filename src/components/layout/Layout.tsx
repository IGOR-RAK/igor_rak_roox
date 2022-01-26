import { Outlet } from "react-router-dom";
import {SideBar}  from "../SideBar";

const Layout: React.FC = () => {
    return ( 
    <div className="container">
      <section className="filter-bar">
        <SideBar/>        
      </section> 
      <main className="filter-bar">
        <Outlet/>
      </main>
    </div>);
}

export  {Layout};