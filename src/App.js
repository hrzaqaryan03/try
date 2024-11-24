import React from "react";
import "./App.scss";
import AppRoutes from "./components/appRoutes/Approutes";
import Header from "./components/header/Header";
import {UserProvider} from  './context/UserContext'
import User from "./components/user/User";
const App = () => {


  console.log("valod is dead");

  console.log('armen barev');
  

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
