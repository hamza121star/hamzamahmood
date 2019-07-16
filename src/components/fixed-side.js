import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../assets/images/favicon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin, faBehanceSquare, faMedium } from '@fortawesome/free-brands-svg-icons'



class FixedSide extends Component{
    render(){
        return(
            <div className="sidebar">
                <div className="brand">
                    <div className="brand-image"><img src={Logo} /></div>
                    <h1 className="sidebar-name">Hamza Mahmood</h1>
                    <h2 className="sidebar-label">Product Designer, User Experience Researcher, UI Developer</h2>
                </div>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Surkhi</li>
                    </ul>
                </nav>
                <ul>
                    <li><a href="https://www.behance.net/hamzamahmood2b65" target="_blank" rel="noopener noreferrer"> Design Work</a></li>    
                    <li><a href="https://github.com/hamza121star" target="_blank" rel="noopener noreferrer"> Coding Stuff</a></li>
                    <li><a href="https://www.instagram.com/storiesofatechie/" target="_blank" rel="noopener noreferrer">Photography </a></li>
                    <li><a href="https://medium.com/@hamzamahmood" target="_blank" rel="noopener noreferrer"> Writing </a></li>
                </ul>
                <footer>
                    <div>
                        <p>&copy; 2019. A basic website. Always a work in progress.</p>
                    </div>
                </footer>
            </div>
        );
    }

}
export default FixedSide;