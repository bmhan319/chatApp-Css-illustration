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
          <div className="chatMessageContainer"><p className="chatMessage chatMessageLeft">That sounds great. I’d be happy with that.</p></div>
          <div className="chatMessageContainer"><p className="chatMessage chatMessageLeft">Could you send over some pictures of your dog, please?</p></div>
          <div className="chatMessageImgContainer">
            <span className="chatImgSpan"><img className="chatImg" src={dog1} alt="dog1"/></span>
            <span className="chatImgSpan"><img className="chatImg" src={dog2} alt="dog2"/></span>
            <span className="chatImgSpan"><img className="chatImg" src={dog3} alt="dog3"/></span>
          </div>
          <div className="chatMessageContainer chatMessageContainerRt"><p className="chatMessage chatMessageRight">Here are a few pictures. She’s a happy girl!</p></div>
          <div className="chatMessageContainer chatMessageContainerRt chatMessageContainerRtLast"><p className="chatMessage chatMessageRight chatMessageRightLast">Can you make it?</p></div>
          <div className="chatMessageContainer"><p className="chatMessage chatMessageLeft">She looks so happy! The time we discussed works. How long shall I take her out for?</p></div>
          <div className="chatRadioContainer chatRadio1"><p className="chatRadioText"><div className="chatRadio"></div>30 minute walk</p><p className="chatRadioPrice">$29</p></div>
          <div className="chatRadioContainer chatRadio2"><p className="chatRadioText"><div className="chatRadio"></div>1 hour walk</p><p className="chatRadioPrice">$49</p></div>
        </div>
        <div className="phoneSubmit"></div>
      </div>
    </div>
  )
}
