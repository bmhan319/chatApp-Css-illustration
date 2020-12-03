import React, { Component } from 'react'
import Background from './components/Background'
import Foreground from './components/Foreground'
import './css/background.css'
import './css/foreground.css'
import './css/phone.css'
import './css/message.css'


export default class App extends Component {
  chatMessages = () => {
    const chat1 = document.getElementById('chat1')
    const chat2 = document.getElementById('chat2')
    const chat3 = document.getElementById('chat3')
    const chat4 = document.getElementById('chat4')
    const chat5 = document.getElementById('chat5')
    const chat6 = document.getElementById('chat6')
    const chat7 = document.getElementById('chat7')
    const chat8 = document.getElementById('chat8')

    setTimeout( ()=>{chat1.style.display='flex'}, 1000 );
    setTimeout( ()=>{chat2.style.display='flex'}, 1500 );
    setTimeout( ()=>{chat3.style.display='flex'}, 2000 );
    setTimeout( ()=>{chat4.style.display='flex'}, 2500 );
    setTimeout( ()=>{chat5.style.display='flex'}, 3000 );
    setTimeout( ()=>{chat6.style.display='flex'}, 3500 );
    setTimeout( ()=>{chat7.style.display='flex'}, 4000 );
    setTimeout( ()=>{chat8.style.display='flex'}, 4500 );
  }

  componentDidMount() {
    this.chatMessages()
  }

  render(){
    return (
      <div className="App">
        <Background />
        <Foreground />
      </div>
    )
  }
}