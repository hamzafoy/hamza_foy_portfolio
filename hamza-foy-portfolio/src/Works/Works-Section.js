import kebab from './img/kebab-wheels-foto.png'
import mdevent from './img/mdevent.png'
import ihya from './img/ihya-502.png'
import learnabit from './img/learn-bit.png'
import css3 from './img/css3_2.svg'
import html5 from './img/html.svg'
import javascript from './img/javascript_3.svg'
import surgesh from './img/surge-sh.svg'
import glitch from './img/glitch_logo.svg'


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

        </div>
    )
}

export default worksSection;