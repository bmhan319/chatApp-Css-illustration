import React, { Component } from 'react'
import Background from './components/Background'
import Foreground from './components/Foreground'
import './css/background.css'
import './css/foreground.css'
import './css/phone.css'
import './css/message.css'


export default class App extends Component {
  chatMessages = () => {
    const chatMessages = document.querySelectorAll('.chatContainer')
    let time = 1000
    chatMessages.forEach( (item, ind) => {
      setTimeout( ()=>{item.style.display='flex'}, time + (ind * 500) );
    })
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