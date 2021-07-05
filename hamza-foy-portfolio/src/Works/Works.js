import React from 'react';
import './Works.css';
import kebab from './img/kebab-wheels-foto.png'
import css3 from './img/css3_2.svg'
import html5 from './img/html.svg'
import javascript from './img/javascript_3.svg'
import surgesh from './img/surge-sh.svg'

class Works extends React.Component {
    render() {
        return(
            <div className="works-container">

                <section className="works-cited">

                    <h1>
                        My Previous Projects
                    </h1>

                    <div className="works-section">

                        <section className="techs-primer">
                            <aside className="tech-svg-container">
                                <img className="tech-icon" src={css3}/>
                                <img className="tech-icon" src={html5}/>
                                <img className="tech-icon" src={javascript}/>
                                <img className="tech-icon" src={surgesh}/>
                            </aside>
                            <p>
                                This website, developed for Abdullah Mahmoud, for the Kebab on Wheels food truck utilized
                                Surge.sh SSG to push updates requested by the client onto the domain in a swift fashion.
                            </p>
                        </section>

                        <img className="kebab-wheels-foto" src={kebab} alt="Kebab on Wheels homepage"/>

                    </div>

                </section>

            </div>
        )
    }
}

export default Works;