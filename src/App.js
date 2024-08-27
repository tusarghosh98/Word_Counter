// import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import AboutUs from './component/AboutUs';
import TextForm from './component/TextForm';
import Home from './component/Display_home';
import React, { useState } from 'react';
import Alert from './component/Alert';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';




function App() {
  const [mode, setMode] = useState('light')
  const toogleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#19192D'
      showalert("Dark Mode on", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showalert("Light Mode on", "success")
    }
  }
  const [alert, setAlert] = useState(null)
  const showalert = (message, type) => {
    setAlert(
      {
        message: message,
        type: type
      })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
  const router = createBrowserRouter([
    {
      path: "/about",
      element: <><Navbar mode={mode} toogleMode={toogleMode}/><Alert alert={alert}/><AboutUs /></>

    },
    {
      path: "/",
      element: <><Navbar mode={mode} toogleMode={toogleMode}/><Alert alert={alert}/><TextForm mode={mode} showalert={showalert}/></>

    },
    {
      path: "/home",
      element: <><Navbar mode={mode} toogleMode={toogleMode}/><Alert alert={alert}/><Home mode={mode}/></>

    }

])


  return (
    <>
    
      {/*<Navbar mode={mode} toogleMode={toogleMode}/>
  <Alert alert={alert}/>
  <TextForm mode={mode} showalert={showalert}/> 
  <div className='my-3'>
  <AboutUs/>
  </div> */}
      <RouterProvider router={router} />
    </>
  );
}
export default App;