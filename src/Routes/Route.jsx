import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home';
import Login from '../Pages/LogIn/Login';
import Dashboard from '../Pages/Dashboard/Dashboard';

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
    },
    {
        path : 'dashboard',
        element : <Dashboard/>
    }
])

export default Route;