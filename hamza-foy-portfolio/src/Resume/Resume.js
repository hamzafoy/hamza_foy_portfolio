import React from 'react';
import './Resume.css';
import headshot from './hamzaHeadshot.png';
import resumedoc from './Hamza_Foy_Resume.docx'

class Resume extends React.Component {
    render() {
        return(
            <div className="resume-container">

                <h1 className="resume-heading">
                My name is Hamza, nice to meet you!
                </h1>

                <p className="resume-subheading">
                Have we met? If not, let's grab a coffee! Oh, and here are some of my skills!
                My <a className="anchors" href={resumedoc} target="_blank" rel="noreferrer">resume</a> is on the navigation bar above along with my Github &amp; LinkedIn!
                </p>
                
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

                <div className="current-events">

                    <h1 className="current-heading">
                    This is what I am currently working on!
                    </h1>

                    <p className="resume-subheading">
                    I am currently working on a multiplayer card game based on a Jordanian variant of Rummy called <a className="anchors" href="https://www.pagat.com/rummy/hand.html" target="_blank" rel="noreferrer">'Hand'</a>.
                    I have already built out much of the card-dealing logic with vanilla JavaScript and designed the cards
                    using the app <a className="anchors" href="https://excalidraw.com/" target="_blank" rel="noreferrer">'Excalidraw'</a>. 
                    I will be building the front-end using React and intend to learn <a className="anchors" href="https://socket.io/get-started/" target="_blank" rel="noreferrer">sockets.io</a> to 
                    handle the multiplayer aspects.
                    </p>

                </div>

            </div>
        )
    }
}

export default Resume;