import { useState } from 'react'
import './App.css'
import AlarmButton from './AlarmButton'
import React from 'react';

import sound1 from './assets/climb.mp3';
import sound2 from './assets/critical.mp3';
import sound3 from './assets/drill.mp3';
import sound4 from './assets/mobile.mp3';
import sound5 from './assets/weapon.mp3';
import NavBar from './navBar';

const App = () => {
  return (
    <div>
      <NavBar/>  
      <div className='alarmBtns'>
        <AlarmButton audioFile={sound1} buttonText="Climbing Alert" />
        <AlarmButton audioFile={sound2} buttonText="Critical Alert" />
        <AlarmButton audioFile={sound3} buttonText="Drilling Alert" />
        <AlarmButton audioFile={sound4} buttonText="Mobile Alert" />
        <AlarmButton audioFile={sound5} buttonText="Weapon Alert" />
      </div>
    </div>
  );
};

export default App;
