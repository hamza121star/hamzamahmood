import React, {Component} from 'react';
import Form from './form';

class Contact extends Component {
    state = {
        fields: {}
    }
    render() {
        return(
            <div className="contact-body">
                <a href={"mailto:" + this.props.email}></a>
                {/* <Form onSubmit={fields => this.onSubmit(fields)} /> */}
            </div>
        )
    }
}

export default Contact;