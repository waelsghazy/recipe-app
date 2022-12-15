import React from 'react';
import { Outlet } from 'react-router-dom';
import Category from './components/Category';
import Search from './components/Search';
import Navbar from './components/Navbar';


function Layout() {
    return (
        <div className='container'>
            <Navbar />
            <Search />
            <Category />
            <Outlet />
        </div>
    )
}


export default Layout