import React from 'react';

const webDeveloper = {
    name: 'Hamza Foy',
    title: 'Freelance Web Developer'
}

class Header extends React.Component {
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

export default Header;