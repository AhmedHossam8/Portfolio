import React from "react";
import aboutData from '../../data/about.json';
import './about.css';

function About() {
    return (
        <div>
            <div>
                <h1 className="about-title">About Me</h1>
            </div>
            <div className="about-text">
                {aboutData.map((section, index) => (
                    <div key={index} style={{ marginBottom: '20px' }}>
                        <h2>{section.title}</h2>
                        <ul>
                            {section.content.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                        {section.image && (
                            <div className="image-container">
                                <img
                                    src={section.image}
                                    alt={section.title}
                                    className="about-image"
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default About;
