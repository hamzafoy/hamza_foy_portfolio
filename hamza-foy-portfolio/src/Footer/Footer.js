import React from 'react'
import './Footer.css'
import upicon from './up_arrow.svg'

class Footer extends React.Component {
    render() {
        return(
            <div className="footer-container">
                <h2>
                    Hamza Foy - Web Designer, Programmer
                </h2>
                <a href=".header-container" className="back-to-top"><img src={upicon} className="up-icon"/></a>
            </div>
        )
    }
}

export default Footer;