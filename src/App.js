import React, { Component } from 'react';
import { Layout, Content } from 'react-mdl';
import FixedSide from './components/fixed-side';
import Main from './components/main';
import './App.scss';


class App extends Component {
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
