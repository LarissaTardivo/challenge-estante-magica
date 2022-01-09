import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from "./pages/Main";
import Register from "./pages/Register";
import Welcome from "./pages/Welcome";
import Error from "./pages/Error";

export default () => {
    return(
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/teacher' element={<Register/>}/>
            <Route path='/manager' element={<Register/>}/>
            <Route path='/parents' element={<Register/>}/>
            <Route path='/welcome' element={<Welcome/>}/>
            <Route path='/error' element={<Error/>}/>
        </Routes>
    );
}