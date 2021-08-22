import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import '../App.css'
import videos from '../images/video-2.mp4'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src={videos}
            autoPlay loop muted />
            <h1>Test!</h1>
            <h1>AMAZING CYBERSECURITY STORIES</h1>
            <p>What are you waiting for?</p>
            <p>Come join me for a tour thorugh the dark areas of the Internet.</p>
            {/* <div className="hero-btns">
                <Button 
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                GET STARTED
                </Button>
                <Button 
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                >
                WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
            </div> */}
        </div>
    )
}

export default HeroSection
