import React, { Component,useState, useEffect } from 'react';
import './style.css'
import Header from './Components/Header';
import LeftSideBar from './Components/leftSideBar';
import RightSideBar from './Components/rightSideBar';
import Body from './Components/body';

function App() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

useEffect(() => {
  function handleResize() {
    setScreenWidth(window.innerWidth);
  }

  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);

const style = {
    width: "6%",
    height: "6%",
    margin: "1%",
    cursor: "pointer",
    backgroundColor: "transparent",
  };

  const iconSvg = {
    width: "20%",
    color: "#8892b0",
    height: "100%",
    margin: "1%",
    cursor: "pointer",
    backgroundColor: "transparent",
  };

//   const built = {
//     color: "rgb(3, 160, 98);",
//     fontSize: "16px",
//     textAlign: "center"
//   }

const mobileSize = screenWidth < 481;
console.log(screenWidth)
// const unScrollableInMobile = screenWidth > 480
// console.log(unScrollableInMobile)
    return ( 
        <div className='container'>
            <Header mobileSize={mobileSize}/>
            <Body mobileSize={mobileSize} style={style}/>
            <LeftSideBar mobileSize={mobileSize} style={iconSvg}/>
            <p className='built'>Built by Alfred Emmanuel</p>
            <RightSideBar />
        </div>
     );
}

export default App;