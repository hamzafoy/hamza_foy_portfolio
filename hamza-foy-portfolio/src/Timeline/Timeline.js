import React from 'react';
import './Timeline.css';
import './Timeline-Handler.css'

class Timeline extends React.Component {
    render() {
        return(
            <div className="timeline-container">

                <section className="timeline">

                    <h1>
                    Hamza Foy's Web Anthology
                    </h1>

                    <p>
                    My compilations of websites and apps,<br/>from humblest beginnings to now. . .
                    </p>

                    <aside className="timeline-handler">
                        <input type="range" id="timeline-range" name="timeline-range"
                                min="0" max="5" value="0"/>
                        <label for="timeline-range">From earliest to greatest</label>
                    </aside>
                    
                    
                </section>

            </div>
        )
    }
}

export default Timeline;