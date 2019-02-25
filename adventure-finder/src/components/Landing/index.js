import React from 'react';
import './Landing.css';
import forest from '../../assets/forest.jpg';

const Landing = () => (
    <div class="container">
        <div class="image-cropper center">
            <img src={forest} alt={"forest"} />
        </div>
            <div class="text-block">
                <h1>Welcome to Adventure Finder!</h1>
                <div class="separator"/>
                <p>Share your favorite adventures.</p>
                <p>Get inspiration from others.</p>
                <p>Sign in to get started!</p>
            </div>
    </div>
);

export default Landing;