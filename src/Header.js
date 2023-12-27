
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./userContext";

export default function Header(){
  const {setUserInfo,userInfo}=useContext(UserContext);
  useEffect(()=>{
    fetch('http://localhost:4000/profile',{
      credentials:'include',
    }).then(response => {
      response.json().then(userInfo => {
       setUserInfo(userInfo);
      })
    })
  },[]);
  
  function logout(){
    fetch('http://localhost:4000/logout',{
      credentials:'include',
      method:'POST',
    })
    setUserInfo(null);
  }

  const username = userInfo?.username;

    return(
        <header>
        {/* <a href="" className='logo'>MYBLOG</a> */}
        <Link to='/' className='logo'>BLOGR</Link>
        <nav>
          {username && (
            <>
            {/* <span>Hello, {username}</span> */}
            <Link to="/create">Create new post</Link>
            <a onClick={logout}>Logout</a>
            </>
          )}
          {!username && (
            <>
<Link to='/login'>Login</Link>
<Link to='/register'>Register</Link>

            </>
          )}
        </nav>
    </header>
    )
}