/**
 * MarketGeek Web App
 * Copyright (C) 2022, MarketGeek.
 *
 * This is the web application for MarketGeek.
 * It is a user interface to make the interaction between the user and the system.
 * 
 * @version 1.0
 * @description Hook async function to find a user.
 **/

import { useEffect } from 'react';
import axios from 'axios';

import { getToken, setToken } from '../Utils/User';

export default function useFindUser() {
    useEffect(() => {
        // Authenticate the user using their token
        async function findUser() {
            await axios.get(process.env.REACT_APP_SERVER_URL + '/user/checkToken', {
                headers: {
                    'Authorization': 'Bearer ' + getToken()
                }
            }) 
            .then(res => {   
                setToken(res.data.user, getToken());
            }).catch(err => {
                console.log(err)
            });
        }

        // Find user
        findUser();
    }, []);
}