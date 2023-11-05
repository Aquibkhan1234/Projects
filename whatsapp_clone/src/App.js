import React from "react";
import Signin from "./components/Signin";
import Main from "./components/Main";
import { Route, Routes } from "react-router-dom";
import Chat from "./components/Chat";
import PhoneSignin from "./components/PhoneSignin";

function App(){
  return (
    <div>

      
      <Routes>
        <Route path="/" element ={<Signin/>}/>
        <Route path="/main" element ={<Main/>}/>
        <Route path="/chat" element ={<Chat/>}/>
        <Route path='/phone' element ={<PhoneSignin/>} />
      </Routes>
    </div>
  ) 
 }

 export default App;  
 