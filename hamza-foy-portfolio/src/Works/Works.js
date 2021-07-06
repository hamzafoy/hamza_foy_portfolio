import React from 'react';
import './Works.css';
import worksSection from './Works-Section'

class Works extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedRadio: "1"
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = event => {
        this.setState({
            selectedRadio: event.target.value
        })
    }

    render() {
        let worksToBeDisplayed = this.state.selectedRadio === '1' ? worksSection.itemOne : worksSection.itemTwo;
        return(
            <div className="works-container">

                <section className="works-cited">

                <h1>
                    My Previous Projects
                </h1>

                <div className="radio-box">
                    <h2>Websites / Apps</h2>
                    <form>
                    <input className="radio-buttons" type="radio" name="option" value="1" checked={this.state.selectedRadio === "1"} onChange={this.handleChange}/>
                    <input className="radio-buttons" type="radio" name="option" value="2" checked={this.state.selectedRadio === "2"} onChange={this.handleChange}/>
                    </form>
                </div>
               
               {worksToBeDisplayed} 

                


                </section>

            </div>
        )
    }
}

export default Works;