import React from 'react'

export default function Phone() {
  return (
    <div className="phoneComponent">
      <div className="phoneContainer">
        <div className="phoneHeader">
          <div className="headerCutout"></div>
          <div className="headerContainer">
            <div className="headerBack"></div>
            <div className="headerImg"></div>
            <div className="headerTextContainer">
              <h3 className="headerName">Samuel Green</h3>
              <p className="headerText">Available to Walk</p>
            </div>
            <div className="headerMenu">
              <span className="burgerTop">.</span>
              <span className="burgerMid">.</span>
              <span className="burgerBot">.</span>
            </div>
          </div>
        </div>
        <div className="phoneChat"></div>
        <div className="phoneSubmit"></div>
      </div>
    </div>
  )
}
