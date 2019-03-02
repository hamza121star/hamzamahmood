import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import './App.scss';


class App extends Component {
    hideToggle() {
        var selectorId = document.querySelector('.mdl-layout');
        selectorId.MaterialLayout.toggleDrawer();
    }
    render() {
        return (
        <div className="demo-big-content">
        <Layout>
            <Header className="header-color" title={<Link style={{textDecoration: 'none', color:'white'}}
            to="/">Hamza Mahmood</Link>} scroll>
                <Navigation>
                    <Link to="/resume">Resume</Link>
                    {/* <Link to="/projects">Projects</Link> */}
                    <Link to="/writings">Writings</Link>
                    <a href={"https://mail.google.com/mail/?view=cm&fs=1&to=hamza.mahmood1993@gmail.com"} rel="noopener noreferrer" target="_blank">Contact</a>
                </Navigation>
            </Header>
            <Drawer className="drawer" title={<Link style={{textDecoration: 'none', color:'white'}}
            to="/">Hamza Mahmood</Link>}>
            <div class="left-email">hamza.mahmood1993@gmail.com</div>
                <Navigation>
                    <Link to="/resume" onClick={() => this.hideToggle()}>Resume</Link>
                    {/* <Link to="/projects">Projects</Link> */}
                    <Link to="/writings" onClick={() => this.hideToggle()}>Writings</Link>
                    <Link to="/contact" onClick={() => this.hideToggle()}>Contact</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Main />
            </Content>
        </Layout>
    </div>
        );
    }
}

export default App;
