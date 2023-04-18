import React, { Fragment } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Components/Home';
import NavBar from './NavBar';
import {Routes,Route} from "react-router-dom";
import  Contact from "./Components/Contact";
import  About from "./Components/About";
import  Service from "./Components/Service";
import  Error from "./Components/Error";
const App = () => {
  return (
    <Fragment>
    
<NavBar/>
 <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route  path="/contact" element={<Contact/>}/>
      <Route  path="/about" element={<About/>}/>
      <Route  path="/service" element={<Service/>}/>
      <Route  path="*" element={<Error/>}/>
 </Routes> 

 </Fragment>
  )
}

export default App;