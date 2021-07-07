import React from 'react';
import './Navigation.css';
import logo from './hamza_Foy_Logo.png'
import linkedin from './linkedin.svg'
import github from './github.svg'
import resume from './resume-2.svg'
import resumedoc from './Hamza_Foy_Resume.docx'

const webDeveloper = {
    name: 'Hamza Foy',
    logo: './hamza_Foy_Logo.png',
    title: ['Freelance Web Developer', 'Respected Community Member', 'Junior Full-Stack Engineer', 'Small Business Aficionado', 'Marketing Material Designer']
}

class Navigation extends React.Component {
    render() {
        const dayAndNight = new Date().getHours();
        let randomNum = Math.floor((Math.random() * 5));
        return (
            <div className="header-container">

                <section className="author">

                    <img className="logo" src={logo} alt="Hamza Foy Web Design"/>

                    <aside>
                    {webDeveloper.name} &#9876; {webDeveloper.title[randomNum]} by {dayAndNight >= 8 && dayAndNight <= 20 ? 'day' : 'night'}
                    </aside>
                    
                </section>

                <section className="icon-list">

                    <a href="https://github.com/hamzafoy" target="_blank" rel="noreferrer"><img className="icon" src={github} alt="Hamza's Github"/></a>
                    <a href="https://www.linkedin.com/in/ross-hamza-foy/" target="_blank" rel="noreferrer"><img className="icon" src={linkedin} alt="Hamza's LinkedIn"/></a>
                    <a href={resumedoc} target="_blank" rel="noreferrer" download><img className="icon" src={resume} alt="Hamza's Resume"/></a>
                
                </section>

            </div>
        )
    }
}

export default Navigation;