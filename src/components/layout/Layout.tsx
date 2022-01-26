import { Outlet } from "react-router-dom";
import {SideBar}  from "../SideBar";

const Layout: React.FC = () => {
    return ( 
    <div className="container">
      <section className="sidebar">
        <SideBar/>        
      </section> 
      <main className="main">
        <Outlet/>
      </main>
    </div>);
}

export  {Layout};