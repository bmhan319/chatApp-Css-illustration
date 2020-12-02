import React from 'react'
import avatar from '../img/avatar.jpg'

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
        <div className="phoneChat"></div>
        <div className="phoneSubmit"></div>
      </div>
    </div>
  )
}
