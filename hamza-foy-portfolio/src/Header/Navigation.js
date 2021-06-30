import React from 'react';
import './Navigation.css';
import logo from './hamza_Foy_Logo.png'
import linkedin from './linkedin.svg'
import github from './github.svg'

const webDeveloper = {
    name: 'Hamza Foy',
    logo: './hamza_Foy_Logo.png',
    title: ['Freelance Web Developer', 'Loving Husband', 'Respected Community Member', 'Junior Full-Stack Engineer']
}

class Navigation extends React.Component {
    render() {
        const dayAndNight = new Date().getHours();
        let randomNum = Math.floor((Math.random() * 4));
        return (
            <div className="header-container">
                
                <section className="author">
                    <img className="logo" src={logo} alt="Hamza Foy Web Design"/>
                    <aside>
                    {webDeveloper.name} &#9876; {webDeveloper.title[randomNum]} by {dayAndNight >= 8 && dayAndNight <= 20 ? 'day' : 'night'}
                    </aside>
                </section>
                <section className="icon-list">
                    <img className="icon" src={github} alt="Hamza's Github"/>
                    <img className="icon" src={linkedin} alt="Hamza's LinkedIn"/>
                </section>
            </div>
        )
    }
}

export default Navigation;