import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Experience extends Component {    
    render(){    
        return (
            <Grid>
                <Cell col={3}>
                    <p style={{fontSize:'1.2em'}}> {this.props.company}</p>
                    <p> {this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={9}>
                    <p style={{marginTop:'0px', fontSize:'1.2em', marginLeft:'-2.5px'}}>{this.props.companyRole}</p>
                    <ul className="dashed" style={{listStyle:'None', padding:'0'}}> {this.props.jobDesc.map(el => <li style={{marginBottom:'3px'}}>{el.item}</li> )} </ul>
                </Cell>
            </Grid>
        )
    }
}

export default Experience;