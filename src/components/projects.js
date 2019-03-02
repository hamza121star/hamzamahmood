import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardMenu, CardActions, Button, IconButton} from 'react-mdl';

class Project extends Component {
    constructor(props){
        super(props);
        this.state = {activeTab: 0};
    }
    togglecategories(){
        if(this.state.activeTab === 0){
            return (
                <div className="projects-grid">
                    {/* Project 1 */}
                    <Card shadow={4} style={{minWidth: '450px', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Statistical Analysis of </CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    {/* Project 2 */}
                    <Card shadow={4} style={{minWidth: '450px', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    
                    {/* Project 3*/ }
                    <Card shadow={4} style={{minWidth: '450px', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div> 
            )
        } else if(this.state.activeTab === 1){
            return (
                <div><h1>This is Data Viz</h1></div>
            )
        } else if(this.state.activeTab === 2){
            return (
                <div><h1>This is UI/UX</h1></div>
            )
        } else if(this.state.activeTab === 3){
            return (
                <div><h1>This is Machine Learning</h1></div>
            )
        }
    }
    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab> Angular </Tab>
                    <Tab> Data Viz </Tab>
                    <Tab> UI / UX </Tab>
                    <Tab> Machine Learning</Tab>
                </Tabs>
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.togglecategories()}</div>
                        </Cell>
                    </Grid>
            </div>
        )
    }
}

export default Project;