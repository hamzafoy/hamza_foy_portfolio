import kebab from './img/kebab-wheels-foto.png'
import mdevent from './img/mdevent.png'
import ihya from './img/ihya-502.png'
import learnabit from './img/learn-bit.png'
import porcus from './img/porcus-verto.png'
import azm from './img/azm.png'
import gliclibrary from './img/glic-library.png'
import css3 from './img/css3_2.svg'
import html5 from './img/html.svg'
import javascript from './img/javascript_3.svg'
import surgesh from './img/surge-sh.svg'
import glitch from './img/glitch_logo.svg'
import heroku from './img/heroku.svg'
import expressjs from './img/expressjs.svg'
import pug from './img/pug.svg'
import sequel from './img/sequelize.svg'
import reactjs from './img/reactjs.svg'


const worksSection = {
    itemOne: (
        <div className="switch-contain">

            <div className="works-section">

                <section className="techs-primer">

                    <aside className="tech-svg-container">
                        <img className="tech-icon" src={css3} alt="CSS3 Badge"/>
                        <img className="tech-icon" src={html5} alt="HTML5 Badge"/>
                        <img className="tech-icon" src={javascript} alt="JavaScript Badge"/>
                        <img className="tech-icon-color" src={surgesh} alt="Surge SSG Badge"/>
                    </aside>

                    <p>
                    This website, developed for Abdullah Mahmoud, for the Kebab on Wheels food truck utilized
                    Surge.sh SSG to push updates requested by the client onto the domain in a swift fashion.
                    </p>

                </section>

                <img className="project-fotos" src={kebab} alt="Kebab on Wheels homepage"/>

            </div>



            <div className="works-section">

                <section className="techs-primer">

                    <aside className="tech-svg-container">
                        <img className="tech-icon" src={css3} alt="CSS3 Badge"/>
                        <img className="tech-icon" src={html5} alt="HTML5 Badge"/>
                        <img className="tech-icon" src={javascript} alt="JavaScript Badge"/>
                    </aside>

                <p>
                This website, developed for Amina Mahamud, for the M&amp;D Event Planner company is designed
                using the parallax effect using CSS and JavaScript.
                </p>

                </section>

                <img className="project-fotos" src={mdevent} alt="MD Event Planner homepage"/>

            </div>



            <div className="works-section">

                <section className="techs-primer">

                    <aside className="tech-svg-container">

                        <img className="tech-icon" src={css3} alt="CSS3 Badge"/>
                        <img className="tech-icon" src={html5} alt="HTML5 Badge"/>
                        <img className="tech-icon" src={javascript} alt="JavaScript Badge"/>
                        <img className="tech-icon-color" src={glitch} alt="Glitch Deployment Site Badge"/>

                    </aside>

                    <p>
                    The Ihya502 website is for my podcast for the local Muslim community here in Louisville. I host this 
                    website on Glitch and update the audio and labels with each new recording.
                    </p>

                </section>

                <img className="project-fotos" src={ihya} alt="Ihya502 podcast homepage"/>

            </div>



            <div className="works-section">

                <section className="techs-primer">

                    <aside className="tech-svg-container">

                        <img className="tech-icon" src={css3} alt="CSS3 Badge"/>
                        <img className="tech-icon" src={html5} alt="HTML5 Badge"/>
                        <img className="tech-icon-color" src={surgesh} alt="Surge SSG Badge"/>
                    
                    </aside>

                    <p>
                    As a member of the Mintbean.io developer community, I take part in a number of their hackathons.
                    In particular, I've worked on a number of frontend designs participating in their Learn-a-bit challenges.
                    </p>

                </section>

                <img className="project-fotos" src={learnabit} alt="Learn-a-Bit frontend challenges"/>

            </div>

        </div>
    ),
    itemTwo: (
        <div className="switch-contain">

            <div className="works-section">

                <section className="techs-primer">

                    <aside className="tech-svg-container">
                        <img className="tech-icon-color-resized" src={expressjs} alt="ExpressJS Badge"/>
                        <img className="tech-icon-color" src={pug} alt="Pug Templating Engine Badge"/>
                        <img className="tech-icon" src={javascript} alt="JavaScript Badge"/>
                        <img className="tech-icon-color" src={heroku} alt="Heroku App Deployment Badge"/>
                    </aside>

                    <p>
                    This app, deployed through Heroku, is a translator taking English words and single sentences
                    and translating them into Pig Latin.
                    </p>

                </section>

                <img className="project-fotos" src={porcus} alt="Pig Latin Translator"/>

            </div>



            <div className="works-section">

                <section className="techs-primer">

                    <aside className="tech-svg-container">
                        <img className="tech-icon-color-resized" src={expressjs} alt="ExpressJS Badge"/>
                        <img className="tech-icon-color" src={sequel} alt="Sequelize Badge"/>
                        <img className="tech-icon" src={javascript} alt="JavaScript Badge"/>
                    </aside>

                <p>
                The Guiding Light Library Manager is a library-management app for a local mosque in Louisville.
                I built this app as a capstone for my FullStack JS cohort with Code Louisville. This app uses SQLite3 &amp; Sequelize.
                </p>

                </section>

                <img className="project-fotos" src={gliclibrary} alt="Guiding Light Library Manager"/>

            </div>



            <div className="works-section">

                <section className="techs-primer">

                    <aside className="tech-svg-container">
                        <img className="tech-icon" src={css3} alt="CSS3 Badge"/>
                        <img className="tech-icon" src={html5} alt="HTML5 Badge"/>
                        <img className="tech-icon" src={javascript} alt="JavaScript Badge"/>
                    </aside>

                <p>
                This is one of the first apps I designed. The AZM app, currently undeployed, drew from various APIs to render a random verse 
                from the Qu'ran, the current weather and temperature in Louisville, and had a basic task list.
                </p>

                </section>

                <img className="project-fotos" src={azm} alt="Guiding Light Workflow app"/>

            </div>

            <div className="works-section">

                <section className="techs-primer">

                    <h1 className="this-project-h1">
                    This Portfolio
                    </h1>

                    <aside className="tech-svg-container">
                        <img className="tech-icon-color" src={reactjs} alt="ReactJS Badge"/>
                        <img className="tech-icon" src={javascript} alt="JavaScript Badge"/>
                    </aside>

                <p className="this-project-p">
                This portfolio utilizes ReactJS &amp; Vanilla JavaScript with respect to ECMA 2015 standards.
                </p>

                </section>

            </div>

        </div>
    )
}

export default worksSection;