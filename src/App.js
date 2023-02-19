import React, { Component } from 'react';
import './style.css'
import Header from './Components/Header';
import LeftSideBar from './Components/leftSideBar';
import RightSideBar from './Components/rightSideBar';
import Body from './Components/body';

function App() {
    return ( 
        <div className='container'>
            <Header />
            <Body />
            <LeftSideBar />
            <RightSideBar />
        </div>
     );
}

export default App;