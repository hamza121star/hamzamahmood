import React, {Component} from 'react';
import Logo from '../assets/images/favicon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


class FixedSide extends Component{
    render(){
        return(
            <React.Fragment>
                <Navbar className="mobile-nav" collapseOnSelect expand="lg">
                    <Navbar.Brand className="nav-brand"><img src={Logo} /><span className="nav-name"> Hamza Mahmood </span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ml-auto nav-toggler"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="navbar-content mr-auto">
                            <Nav.Link className="mobile-link" href="https://www.behance.net/hamzamahmood2b65" target="_blank" rel="noopener noreferrer"> Design Work</Nav.Link>    
                            <Nav.Link className="mobile-link" href="https://github.com/hamza121star" target="_blank" rel="noopener noreferrer"> Coding Stuff</Nav.Link>
                            <Nav.Link className="mobile-link" href="https://www.instagram.com/storiesofatechie/" target="_blank" rel="noopener noreferrer">Photography </Nav.Link>
                            <Nav.Link className="mobile-link" href="https://medium.com/@hamzamahmood" target="_blank" rel="noopener noreferrer"> Writing </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Navbar>
                <div className="mobile-nav">
                    <div className="brand">
                        <div className="brand-image"></div>
                        <p className="mobile-label">Product Designer, User Experience Researcher, UI Developer</p>
                    </div>
                </div>
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
            </React.Fragment>
        );
    }

}
export default FixedSide;