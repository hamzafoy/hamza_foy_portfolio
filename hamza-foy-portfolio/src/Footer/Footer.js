import React from 'react'
import { Link, animateScroll } from 'react-scroll'
import './Footer.css'
import upicon from './up_arrow.svg'
import email from './gmail.svg'
import whatsapp from './whatsapp.svg'

class Footer extends React.Component {
    scrollToTop = () => {
        animateScroll.scrollToTop();
    }

    render() {
        return(
            <div className="footer-container">
                <h2>
                    Hamza Foy - Web Designer, Programmer - 
                    Reach me:
                    <div className="footer-icons">
                        <img className="contact" src={email} alt="Gmail" title="Email me!"/>
                        <img className="contact" src={whatsapp} alt="Whatsapp" title="Whatsapp me!"/>
                    </div>
                </h2>
                <Link
                to="react-scroll-top"
                smooth={true}
                duration={500}
                spy={true}
                ><img src={upicon} className="up-icon" alt="Back to Top!" onClick={this.scrollToTop}/>
                </Link>
            </div>
        )
    }
}

export default Footer;