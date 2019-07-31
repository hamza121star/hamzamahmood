import React, {Component} from 'react';
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'

class Post extends Component {
    render(){   
        const post = this.props.post ? (
            <div className='blog-side'>
                <div className="aspect-ratio-placeholder">
                    <div className="indv-disp">
                        <img src={require(`../assets/images/${this.props.post.disp}`)}/>
                    </div>
                </div>
                <div className="post">
                    <h2 className="post-title">{this.props.post.title}</h2>
                    <div>
                        {this.props.post.body}
                    </div>
                </div>
            </div>
        ) : (
            <div className="center">Loading Post...</div>
        )
        return(
            <div className="container">
                {post}
            </div>
            
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let postName = ownProps.match.params.name;
    console.log(postName);
    return {
        post: state.posts.find(post => post.name === postName)
    }
}



export default withRouter(connect(mapStateToProps)(Post));