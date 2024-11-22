import React from "react";
import "./App.scss";
import AppRoutes from "./components/appRoutes/Approutes";
import Header from "./components/header/Header";
import {UserProvider} from  './context/UserContext'
const App = () => {
  return (
    <UserProvider>
      <Header />
      <div>
        <AppRoutes />
      </div>
    </UserProvider>
  );
};

export default App;
