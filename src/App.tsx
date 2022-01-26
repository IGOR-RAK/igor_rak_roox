import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import {Layout} from './components/layout/Layout';
import {Users} from './pages/Users';
import {User} from './pages/User';





function App() {
 
  return (
    <>
      <Routes>
       <Route path="/" element={<Layout/>}>
        <Route index element={<Users/>}/>
        <Route path="/user/:id" element={<User/>}/>          
       </Route>
     </Routes>
    </>
  );
}

export default App;
