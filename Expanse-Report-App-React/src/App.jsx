import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import NavBarComponent from "./navbar/navbar";
import ExpansesComponent from "./pages/expanses/expanses";
import AboutUsComponent from "./pages/aboutUs/aboutUs";
import SignComponent from "./pages/sign/signIn";
import SignUpComponent from "./pages/sign/signUp";
import HomeComponent from "./pages/home/home";
import React from "react";
import {useState,useEffect} from 'react';


const tabs = ["home","expenses","about_Us"];

const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/expenses"></Navigate> },
  {
    element: (
      <div>
        <NavBarComponent tabs={tabs}></NavBarComponent>
        <HomeComponent></HomeComponent>
      </div>
    ),
    path: "/home",
  },
  {
    element: (
      <div>
        <NavBarComponent tabs={tabs}></NavBarComponent>
        <ExpansesComponent></ExpansesComponent>
      </div>
    ),
    path: "/expenses",
  },

  {
    element: (
      <div>
        <NavBarComponent tabs={tabs}></NavBarComponent>
        <AboutUsComponent></AboutUsComponent>
      </div>
    ),
    path: "/about_Us",
  },
  {
    element: (
      <div>
        <NavBarComponent tabs={tabs}></NavBarComponent>
        <SignComponent></SignComponent>
      </div>
    ),
    path: "/sign_In",
  },
  {
    element: (
      <div>
        <NavBarComponent tabs={tabs}></NavBarComponent>
        <SignUpComponent></SignUpComponent>
      </div>
    ),
    path: "/sign_Up",
  }
]);

export const buttonContext=React.createContext()

function App() {
  const [visible, setVisible] = useState();

  useEffect(() => {
    if(visible){
      setVisible(true);
    }
    else{setVisible(false);}

  }, [visible]);

  return (
    <buttonContext.Provider value={{visible,setVisible}}>
      
      <RouterProvider router={router}></RouterProvider>
      
    </buttonContext.Provider>
    
  );
}

export default App;
