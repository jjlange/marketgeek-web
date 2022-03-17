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

 // React imports
 import React, {useEffect, useState} from "react";
 import { Navigate } from 'react-router-dom';

 // Import Axios library for HTTP requests
 import axios from 'axios'

 // Utility imports
 import { getToken, setUser } from "../Utils/User"

 // Protected route for signed in users
 export const ProtectedRoute = (props) => {
     
    // Set states for loading and authenticated
    const [authenticated, setAuthenticated] = useState(null);
    const [loadingComplete, setLoadingComplete] = useState(false);

    // Use effect to check if user is authenticated by sending a request to the API Server
    useEffect(() => {

        // Authenticate the user using their token
        const token = getToken();

        const isLogin = async (token) => {
            try {
                const config = { headers: { 'Authorization': `Bearer ${token}` } };
                const result = await axios.get(process.env.REACT_APP_SERVER_URL + '/user/checkToken', config);
                setAuthenticated(result.data);
            } catch (e) {
              console.log(e);
            }
            setLoadingComplete(true);
        }
  
        isLogin(token);
  
    }, []);
  
    if(loadingComplete){
        // Refresh user data in local storage
        if(authenticated) {
          setUser(authenticated.user);
        }
  
        return (authenticated ?
        props.children :
        <Navigate to="/?error=not_signed_in" />)
    } else {
        return (<div> Loading...</div>)
    }
}