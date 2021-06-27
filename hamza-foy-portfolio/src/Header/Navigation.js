import React from 'react';
import './Navigation.css'

const webDeveloper = {
    name: 'Hamza Foy',
    title: 'Freelance Web Developer'
}

class Navigation extends React.Component {
    render() {

        return (
            <div className="header-container">
                <section className="author">
                    {webDeveloper.name} :: {webDeveloper.title}
                </section>
            </div>
        )
    }
}

export default Navigation;