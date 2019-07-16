import React, {Component} from 'react';
import axios from 'axios'

class FormModal extends Component {
    constructor(props){
        super(props)
        this.state = {
            // email: "",
            // message: "",
            modalToggle: props.show
        };
    }
    


    render() {
        return(
            <div>
                { this.props.show ? (
                    <div className="contact-modal-form">
                        <h1>Drop a Line</h1>
                        <form>
                            <div class="field email-box">
                                <input type="text" id="email" placeholder="name@email.com" value={this.state.email} onChange={e => this.change(e)}></input>
                                <label for="email">Email</label>
                                <span class="ss-icon">check</span>
                            </div>
                    
                            <div class="field msg-box">
                                <textarea id="msg" rows="4" placeholder="Your message goes here..." value={this.state.message} onChange={e => this.change(e)} />                    <label for="msg">Msg</label>
                                <span class="ss-icon">check</span>
                            </div>
                            <submit class="button" onClick={() => this.onSubmit()}>Submit</submit>
                        </form>
                    </div>
                    )
                    : null
                }
            </div>
        )
    }
}


export default FormModal;