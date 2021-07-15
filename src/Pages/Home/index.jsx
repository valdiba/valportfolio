import React from 'react';
import Navbar from '../../Components/navbar';
import ValPhoto from '../../assets/val-photo.png';
import './styles.scss';

const Home = () => {
    return (
        <div className="App">
            <Navbar />
            <div className="header">
                <div className="intro-resume">
                    <h4>Hey!</h4>
                    <h1>I'm Valentina.</h1>
                    <h4>But, you can call me Val.</h4>
                    <h3>I am passionate about 
                        <span className="passion-1"> design,</span> <span className="passion-2">code,</span> 
                        <span className="passion-3"> music</span> and <span className="passion-4">nature.</span>
                    </h3>
                    <h5>Currently working on Bogotá D.C. @Endava.</h5>
                </div>
                <div className="intro-image">
                    <img src={ValPhoto} alt="Val portrait photo" className="intro" />
                </div>
            </div>
        </div>
    )
}

export default Home;
