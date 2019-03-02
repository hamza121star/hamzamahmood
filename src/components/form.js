import React, {Component} from 'react';
import axios from 'axios'

class Form extends Component {
    constructor(){
        super()
        this.state = {
            name: "",
            email: "",
            message: ""
        };
        this.change = this.change.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    
    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    async onSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state);
        const {name, email, message} = this.state
        const form = await axios.post('/api/form', {
            name, 
            email,
            message
        })
    }

    // Input Lock
    


    render() {
        return(
            <section id="hire">
            <h1>Contact Me</h1>
            
            <form>
                <div class="field name-box">
                    <input type="text" id="name" placeholder="Who Are You?" value={this.state.name} onChange={e => this.change(e)}></input>
                    <label for="name">Name</label>
                    <span class="ss-icon">check</span>
                </div>
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
        </section>
        )
    }
}


export default Form;