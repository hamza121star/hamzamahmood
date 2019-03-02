import React, {Component} from 'react';
import { Progress } from 'reactstrap';

class Skill extends Component {   
    render(){  
        return (
            <div>
                <p style={{marginBottom:'4px'}}>{this.props.skillset}</p>
                <Progress style={{backgroundColor: 'rgb(255, 245, 231)'}} value={this.props.percentage} />
            </div>
        )
    }
}

export default Skill;