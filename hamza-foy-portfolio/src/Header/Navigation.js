import React from 'react';
import './Navigation.css'

const webDeveloper = {
    name: 'Hamza Foy',
    title: 'Freelance Web Developer'
}

class Navigation extends React.Component {
    render() {
        const dayAndNight = new Date().getHours();
        return (
            <div className="header-container">
                <section className="author">
                    {webDeveloper.name} &#9876; {webDeveloper.title} by {dayAndNight >= 12 ? 'day' : 'night'}
                </section>
            </div>
        )
    }
}

export default Navigation;