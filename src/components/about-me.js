import React, {Component} from 'react';
import {Cell} from 'react-mdl';

class About extends Component {    
    render(){    
        return (
            <Cell className="square-feel" style={{backgroundColor: this.props.color, opacity:0.8}} col={4}>
                <div>
                    <div><i style={{fontSize:'3em'}} className={this.props.logo}></i></div>
                    <h3 style={{font: 'Montserrat', letterSpacing: '-1px', fontSize: '38px', lineHeight: '42px', fontWeight: '700'}}>
                        {this.props.heading}
                    </h3>
                    
                    <p style={{font: 'Helvetica' ,textAlign: 'justify', fontWeight: 'normal'}}>
                        {this.props.description}
                    </p>
                </div>
            </Cell>
        )
    }
}

export default About;