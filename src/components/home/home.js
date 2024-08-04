import React from "react";
import './home.css';

function Home() {
    return (
        <div className="container">
            <div className="description">
                <div className="description-text">
                    <h1 style={{ color: 'white' }}>
                        I'm <span style={{ color: 'aquamarine' }}>Ahmed Emara</span>.
                        Fresh Graduate in Computer Science from AAST | Former Intern at ITWorx, Cairo, Egypt.
                    </h1>
                </div>
                <div className="img-container">
                    <img src="./assets/myPhoto.png" alt="Ahmed Emara"></img>
                </div>
            </div>
            <div className="btns">
                <a href='/#about' className='about-link'>
                    More about me
                </a>
                <button className="projects-btn">
                    View my projects
                </button>
            </div>
        </div>
    );
}
export default Home;