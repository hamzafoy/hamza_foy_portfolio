import React from 'react';
import './Timeline.css';
import './Timeline-Handler.css'

class Timeline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '0'};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        //alert(this.state.value)
        this.setState({value: event.target.value});
    }

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
                                min="0" max="5" defaultValue="0" onChange={this.handleChange}/>
                        <label for="timeline-range">From earliest to greatest</label>
                    </aside>
                    
                    
                </section>

            </div>
        )
    }
}

export default Timeline;