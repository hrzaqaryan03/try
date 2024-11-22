import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
const Header = () => {
  const {user , logOut} = useContext(UserContext);
   
    
  return (
    <header>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
        <li>
          <Link to={"secret"}>Secret</Link>
        </li>
      </ul>
      <div>
        {user ? (

             <>
             <span>{`Hello ${user.name}`}</span>
 
             <svg
               width="800px"
               height="800px"
               viewBox="0 0 24 24"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
             >
               <circle
                 cx="12"
                 cy="6"
                 r="4"
                 stroke="#1C274C"
                 strokeWidth="1.5"
               />
               <path
                 d="M19.9975 18C20 17.8358 20 17.669 20 17.5C20 15.0147 16.4183 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C14.231 22 15.8398 21.8433 17 21.5634"
                 stroke="#1C274C"
                 strokeWidth="1.5"
                 strokeLinecap="round"
               />
             </svg>
             <button onClick={logOut}>Logout</button>
           </>
        ) : (
            <ul>
            <li>
              <Link to={"/login"}>Sign up</Link>
            </li>
            <li>
              <span>/</span>
            </li>
            <li>
              <Link to={"/login"}>Sign in</Link>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
