import React from "react";
import './index.css'; 
import { Route } from "react-router-dom";

const App=()=>{
  return(
    <div >
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='captain-login' element={<CaptainLogin />} />
        <Route path='captain-signup' element={<CaptainSignup />} />
       </Routes>
    </div>
  )
}

export default App;