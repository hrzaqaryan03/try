import React from "react";
import "./App.scss";
import AppRoutes from "./components/appRoutes/Approutes";
import Header from "./components/header/Header";
import {UserProvider} from  './context/UserContext'
import User from "./components/user/User";
const App = () => {


  console.log("valod is dead");
  

  return (
    <UserProvider>
      <Header />
      <div>
        <AppRoutes />
        <User/>
      </div>
    </UserProvider>
  );
};

export default App;
