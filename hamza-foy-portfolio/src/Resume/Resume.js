import React from 'react';
import './Resume.css';
import headshot from './hamzaHeadshot.png';

class Resume extends React.Component {
    render() {
        return(
            <div className="resume-container">

                <h1 className="resume-heading">
                My name is Hamza, nice to meet you!
                </h1>
                
                <section className="resume-listing">
                    
                    <img className="headshot" src={headshot} alt="Hamza's Headshot"/>

                    <div className="button-list">

                        <div className="button">
                            <div className="button_side front">
                                <aside>HTML5</aside>
                            </div>
                            <div className="button_side bottom">
                                <aside>Proficient</aside>
                            </div>
                        </div>
                        <div className="button">
                            <div className="button_side front">
                                <aside>CSS3</aside>
                            </div>
                            <div className="button_side bottom">
                                <aside>Proficient</aside>
                            </div>
                        </div>
                        <div className="button">
                            <div className="button_side front">
                                <aside>ECMAScript2015</aside>
                            </div>
                            <div className="button_side bottom">
                                <aside>Proficient</aside>
                            </div>
                        </div>
                        <div className="button">
                            <div className="button_side front">
                                <aside>ReactJS</aside>
                            </div>
                            <div className="button_side bottom">
                                <aside>Intermediate</aside>
                            </div>
                        </div>
                        <div className="button">
                            <div className="button_side front">
                                <aside>ExpressJS</aside>
                            </div>
                            <div className="button_side bottom">
                                <aside>Intermediate</aside>
                            </div>
                        </div>
                        <div className="button">
                            <div className="button_side front">
                                <aside>SQL</aside>
                            </div>
                            <div className="button_side bottom">
                                <aside>Beginner</aside>
                            </div>
                        </div>
                        <div className="button">
                            <div className="button_side front">
                                <aside>Writing</aside>
                            </div>
                            <div className="button_side bottom">
                                <aside>Advanced</aside>
                            </div>
                        </div>
                        <div className="button">
                            <div className="button_side front">
                                <aside>Marketing Strategies</aside>
                            </div>
                            <div className="button_side bottom">
                                <aside>Intermediate</aside>
                            </div>
                        </div>

                    </div>
                    

                </section>

            </div>
        )
    }
}

export default Resume;