import React, { useState } from 'react';
import './App.css';
import bgdesktopdark from "./images/bg-desktop-dark.jpg";
import bgmobiledark from "./images/bg-mobile-dark.jpg";
import bgdesktoplight from "./images/bg-desktop-light.jpg";
import bgmobilelight from "./images/bg-mobile-light.jpg";
import iconsun from "./images/icon-sun.svg";
import iconmoon from "./images/icon-moon.svg";
import iconcross from "./images/icon-cross.svg";

function App() {
  
  const [theme, setTheme] = useState(1);

  const toggleTheme = () => {
    if (theme === 1) {setTheme(2)}
    else {setTheme(1)}
  }

  const iconTheme = theme === 1 ? iconsun : iconmoon;
  const imgDesktop = theme === 1 ? bgdesktopdark : bgdesktoplight;
  const imgMobile = theme === 1 ? bgmobiledark : bgmobilelight;

  return (
    <div className={`App theme-${theme}`}>

      <picture>
        <source media="(min-width: 548px)" srcSet={imgDesktop} />
        <img src={imgMobile} alt="" />
      </picture>

      <div className='content'>

        <div className="header">
          <h1>TODO</h1>
          <button onClick={toggleTheme}>
          <img src={iconTheme} alt="" />
          </button>
        </div>

        <div className={`newTodo theme-${theme}`}>
          
          <input 
            type="checkbox" 
          />
          <input 
            type="text" 
            placeholder='Create a new todo...'
            maxLength={30}
          />
          
        </div>

        <div className={`list theme-${theme}`}>

            <div className="listTop">
              
              <div className="li">

                <div className={`text theme-${theme}`}>
                <input type="checkbox" />
                <span>Lista 1</span>
                </div>

                <div className="close">
                  <img src={iconcross} alt="" />
                </div>

              </div>

            </div>


            <div className="listBot">
            
              <div className="liBotMobile">
                
                <div className={`liBotMobileTop theme-${theme}`}>
                  <div>5 items left</div>
                  <div>Clear Completed</div>
                </div> 

                
              </div>
            
            </div>

          

  
        </div>

      </div>

    </div>
  );
}

export default App;
