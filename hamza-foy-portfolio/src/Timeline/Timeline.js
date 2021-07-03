import React from 'react';
import './Timeline.css';
import './Timeline-Handler.css'
import timelineSections from './Timeline-Sections'


class Timeline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '1'};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        //alert(this.state.value)
        this.setState({value: event.target.value});
    }

    render() {
        let timelineDisplay;
        
        switch (this.state.value) {
            case '1':
                timelineDisplay = timelineSections.itemOne;
                break;
            case '2':
                timelineDisplay = timelineSections.itemTwo;
                break;
            case '3':
                timelineDisplay = timelineSections.itemThree;
                break;
            case '4':
                timelineDisplay = timelineSections.itemFour;
        }

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
                                min="1" max="5" defaultValue="1" onChange={this.handleChange}/>
                        <label for="timeline-range">Kudos if you learn my favorite show by virtue of the volume titles</label>
                    </aside>

                    {timelineDisplay}
                    
                </section>

            </div>
        )
    }
}

export default Timeline;