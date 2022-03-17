/**
 * MarketGeek Web App
 * Copyright (C) 2022, MarketGeek.
 *
 * This is the web application for MarketGeek.
 * It is a user interface to make the interaction between the user and the system.
 * 
 * @version 1.0
 * @description Util class for the user.
 */

// Imports
import axios from 'axios'

// Return the user object from the session storage
export const getUser = () => {
  const userStr = sessionStorage.getItem('user');
  if (userStr) return JSON.parse(userStr);
  else return null;
}
 
// Return the token from the session storage
export const getToken = () => {
  return sessionStorage.getItem('token') || null;
}
 
// Remove the token from the session storage
export const removeToken = () => {
  sessionStorage.removeItem('token');
}
 
// Save the token to the session storage
export const setToken = (token) => {
  sessionStorage.setItem('token', token);
}

// Save the user object to the session storage
export const setUser = (user) => {
  sessionStorage.setItem('user', JSON.stringify(user));
}

// Check the JWT authentication token
export const checkAuthToken = () => {
    return new Promise((resolve, reject) => {
        axios.get(process.env.REACT_APP_SERVER_URL + '/user/checkToken', {
            headers: {
              'Authorization': 'Bearer ' + getToken()
            }
        }).then(res => {
            resolve(true)
        }).catch(err => {
            reject(false)
        })
    })
}


