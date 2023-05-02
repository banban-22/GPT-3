import React from 'react'
import './whatGPT3.css'
import Feature from '../../components/feature/Feature'

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature />
      </div>
      <div className="gpt3__whatgpt3-header">
        <h1 className="gradient-text">
          <p>Explore The Library</p>
        </h1>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature />
        <Feature />
        <Feature />
      </div>
    </div>
  )
}

export default WhatGPT3