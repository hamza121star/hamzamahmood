// We wil use this js file to set the routes
import React from 'react'; // not a class based component
import {Switch, Route} from 'react-router-dom';
import LandingPage from './landingpage';
import Resume from './resume';
import Project from './projects';
import Writing from './writings';
import Contact from './contact';
import Post from './post';
import CompanyDiversity from './company-diversity'

const Main = () => (
<Switch>
    <Route exact path = "/" component={LandingPage} />
    <Route path = "/resume" component={Resume} />
    <Route path = "/projects" component={Project} />
    <Route path = "/writings" component={Writing} />
    <Route path = "/contact" component={Contact} />
    <Route path="/company-diversity" component={CompanyDiversity} />
    <Route path="/:post_id" component={Post} />
</Switch>
)
export default Main;
