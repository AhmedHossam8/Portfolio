import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import data from '../../data/projects.json';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './projects.css';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        setProjects(data['Projects']);
    }, []);

    const handlePrevClick = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNextClick = () => {
        if (currentIndex < projects.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <div>
            <div className='projects-title'>
                <h1>My Projects</h1>
            </div>
            <div className="card-container">
                <Carousel
                    showArrows={false}
                    showThumbs={false}
                    showStatus={false}
                    className="custom-carousel"
                    selectedItem={currentIndex}
                    onChange={(index) => setCurrentIndex(index)}
                >
                    {projects.map((project) => (
                        <div key={project.id} className="carousel-slide">
                            <div className="carousel-content">
                                <h3 className="carousel-title">{project.title}</h3>
                                <div className='external-arrow-div left-arrow' onClick={handlePrevClick}>
                                    <img src='/assets/left-arrow.png' alt='left arrow' className='external-arrow' />
                                </div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="carousel-image"
                                />
                                <p className="carousel-body">{project.body}</p>
                                <a
                                    href={project.link}
                                    className="carousel-button"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Project
                                </a>
                                <div className='external-arrow-div right-arrow' onClick={handleNextClick}>
                                    <img src='/assets/right-arrow.png' alt='right arrow' className='external-arrow' />
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<Projects />, rootElement);

export default Projects;
