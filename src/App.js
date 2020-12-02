import React from 'react';
import Background from './components/Background'
import Foreground from './components/Foreground'
import './css/background.css'
import './css/foreground.css'
import './css/phone.css'
import './css/message.css'


function App() {
  return (
    <div className="App">
      <Background />
      <Foreground />
    </div>
  );
}

export default App;
