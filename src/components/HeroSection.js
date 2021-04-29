import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import backgr from './backgr.jpg';
import video from './video.mp4'
import { render } from '@testing-library/react';

function HeroSection() {

return (
<div className='hero-container'>
        {/* <video src='./video/video.mp4' autoPlay loop/> --> NOT OK*/}
        <video src={ video } id="vid" autoPlay loop muted/>
        {/*<img src={backgr} alt="img" />   -->OK  */}

<h1>ADVENTURE AWAITS</h1>
<p>What are you waiting for?</p>
<div className='hero-btns'>
<Button
     className='btns'
     buttonStyle='btn--outline'
     buttonSize='btn--large'
>
GET STARTED
</Button>
</div>
</div>
);

}
export default HeroSection
