import React from 'react';
import './Navigation.css';
import logo from './hamza_Foy_Logo.png'

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
                <img className="logo" src={logo} alt="Hamza Foy Web Design"/>
                <section className="author">
                    {webDeveloper.name} &#9876; {webDeveloper.title[randomNum]} by {dayAndNight >= 8 && dayAndNight <= 20 ? 'day' : 'night'}
                </section>
            </div>
        )
    }
}

export default Navigation;