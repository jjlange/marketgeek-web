/**
 * MarketGeek Web App
 * Copyright (C) 2022, MarketGeek.
 *
 * This is the web application for MarketGeek.
 * It is a user interface to make the interaction between the user and the system.
 * 
 * @version 1.0
 * @description App / Router handler
 **/

 // React import
 import {React, Fragment} from "react"
 import {
   BrowserRouter as Router,
   Routes,
   Route,
 } from "react-router-dom"
 
 // Views
 import Index from "./Index"
 import Home from "./Home"
 import Search from "./Search"
 
 // Utility imports
 import { ProtectedRoute } from "../Hooks/protectedRoute"


 function App() {
 
   return (
       <>
         <Router>
             <Fragment>
               <Routes>
                <Route exact path='/' element={<Index/>}/>
                 <Route
                   path="/home"
                   element={
                     <ProtectedRoute>
                       <Home />
                     </ProtectedRoute>
                 }
               /> 
               <Route exact path ='/search' element={<Search/>}/>         
               <Route exact path='/*' element={<Index/>}/>
             </Routes>
           </Fragment>
         </Router>
     </> 
   );
 }
 
 export default App;
 
  