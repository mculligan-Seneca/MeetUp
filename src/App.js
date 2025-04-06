import React from 'react';
import MeetUpNavbar from './components/Navbar/MeetUpNavbar';
import { Outlet } from 'react-router';
import {navBarItems}from './componentMap';
//Attempt to write the app firstly as one large component and add necessary components as you go.
export default function App() {
    return (
    <div>
     <MeetUpNavbar navLinks={navBarItems}/>
     <Outlet/>
    </div>
    );
}


