import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from "./pages/Register";
import Teacher from "./pages/Teacher";

export default () => {
    return(
        <Routes>
            <Route path='/' element={<Register/>}/>
            <Route path='/teacher' element={<Teacher/>}/>
        </Routes>
    );
}