import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import './App.scss';


class App extends Component {
    // hidedrawer() {
    //     document.getElementById("drawer1").className = "mdl-layout__drawer"; // only keep mdl-layout__drawer, is-visible should be removed
    // }
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
            <Drawer id="drawer1" className="drawer" title={<Link style={{textDecoration: 'none', color:'white'}}
            to="/">Hamza Mahmood</Link>}>
            <div className="left-email">hamza.mahmood1993@gmail.com</div>
                <Navigation>
                    <Link to="/resume" onClick="hidedrawer()">Resume</Link>
                    {/* <Link to="/projects">Projects</Link> */}
                    <Link to="/writings">Writings</Link>
                    <Link to="/contact">Contact</Link>
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
