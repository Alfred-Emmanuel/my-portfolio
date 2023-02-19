import React, { Component } from 'react';
import './style.css'
import Header from './Components/Header';
import LeftSideBar from './Components/leftSideBar';

function App() {
    return ( 
        <div className='container'>
            <Header />
            <LeftSideBar />
        </div>
     );
}

export default App;