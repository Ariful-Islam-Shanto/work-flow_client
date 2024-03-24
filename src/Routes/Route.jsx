import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import Login from '../Pages/LogIn/Login';

const Route = createBrowserRouter([
    {
        path : "/",
        element : <Main/>,
        children : [
            {
            path: '/',
            element: <Home/>
        },
        {
            path : "/login",
            element : <Login/>
        }
    ]
    }
])

export default Route;