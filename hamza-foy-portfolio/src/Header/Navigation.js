import React from 'react';
import './Navigation.css'

const webDeveloper = {
    name: 'Hamza Foy',
    title: ['Freelance Web Developer', 'Loving Husband', 'Respected Community Member', 'Junior Full-Stack Engineer']
}

class Navigation extends React.Component {
    render() {
        const dayAndNight = new Date().getHours();
        let randomNum = Math.floor((Math.random() * 4));
        return (
            <div className="header-container">
                <section className="author">
                    {webDeveloper.name} &#9876; {webDeveloper.title[randomNum]} by {dayAndNight >= 12 ? 'day' : 'night'}
                </section>
            </div>
        )
    }
}

export default Navigation;