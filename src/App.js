import React from 'react'
import Home from './Components/Home'
import { Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./userContext";
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import Layout from "./Layout";

function App (){
  return (
    <UserContextProvider>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
      </Route>
    </Routes>
    </UserContextProvider>
  )
}

export default App