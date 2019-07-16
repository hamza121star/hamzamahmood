import React, { Component } from 'react';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import FixedSide from './components/fixed-side';
import Main from './components/main';
import { Link } from 'react-router-dom';
import './App.scss';


class App extends Component {
    hideToggleTitle() {
        var selectorId = document.querySelector('.mdl-layout-title');
        selectorId.MaterialLayout.toggleDrawer();
    }
    hideToggle() {
        var selectorId = document.querySelector('.mdl-layout');
        selectorId.MaterialLayout.toggleDrawer();
    }
    render() {
        return (
        <div className="demo-big-content">
        <Layout>
            <Content>
                <div className="page-content" />
                <FixedSide />
                <Main />
            </Content>
        </Layout>
    </div>
        );
    }
}

export default App;
