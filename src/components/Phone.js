import React from 'react'
import avatar from '../img/avatar.jpg'
import dog1 from '../img/dog-image-1.jpg'
import dog2 from '../img/dog-image-2.jpg'
import dog3 from '../img/dog-image-3.jpg'

export default function Phone() {
  return (
    <div className="phoneComponent">
      <div className="phoneContainer">
        <div className="phoneHeader">
          <div className="headerCutout"></div>
          <div className="headerContainer">
            <div className="headerBack">{"<"}</div>
            <div className="headerImgContainer">
              <img className="headerImg" src={avatar} alt='avatar' />
            </div>
            <div className="headerTextContainer">
              <h3 className="headerName">Samuel Green</h3>
              <p className="headerText">Available to Walk</p>
            </div>
            <div className="headerMenu">
              <span className="burger burgerTop"></span>
              <span className="burger burgerMid"></span>
              <span className="burger burgerBot"></span>
            </div>
          </div>
        </div>
        <div className="phoneChat">
          <div id="chat1" className="chatMessageContainer chatOff"><p className="chatMessage chatMessageLeft">That sounds great. I’d be happy with that.</p></div>
          <div id="chat2" className="chatMessageContainer chatOff"><p className="chatMessage chatMessageLeft">Could you send over some pictures of your dog, please?</p></div>
          <div id="chat3" className="chatMessageImgContainer chatOff">
            <span className="chatImgSpan"><img className="chatImg" src={dog1} alt="dog1"/></span>
            <span className="chatImgSpan"><img className="chatImg" src={dog2} alt="dog2"/></span>
            <span className="chatImgSpan"><img className="chatImg" src={dog3} alt="dog3"/></span>
          </div>
          <div id="chat4" className="chatOff chatMessageContainer chatMessageContainerRt"><p className="chatMessage chatMessageRight">Here are a few pictures. She’s a happy girl!</p></div>
          <div id="chat5" className="chatOff chatMessageContainer chatMessageContainerRt chatMessageContainerRtLast"><p className="chatMessage chatMessageRight chatMessageRightLast">Can you make it?</p></div>
          <div id="chat6" className="chatOff chatMessageContainer"><p className="chatMessage chatMessageLeft">She looks so happy! The time we discussed works. How long shall I take her out for?</p></div>
          <div id="chat7" className="chatOff chatRadioContainer chatRadio1"><p className="chatRadioText"><span className="chatRadio"></span>30 minute walk</p><p className="chatRadioPrice">$29</p></div>
          <div id="chat8" className="chatOff chatRadioContainer chatRadio2"><p className="chatRadioText"><span className="chatRadio"></span>1 hour walk</p><p className="chatRadioPrice">$49</p></div>
        </div>
        <div className="phoneSubmit">
          <div className="submitContainer">
            <p className="submitPlaceholder">Type a message…</p>
            <div className="submitButton">{">"}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
