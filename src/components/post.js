import React, {Component} from 'react';
import { connect } from 'react-redux'
import {Grid, Cell} from 'react-mdl';
import {withRouter,Route} from 'react-router-dom'

class Post extends Component {
    render(){   
        console.log("Here");
        console.log(this.props);
        const post = this.props.post ? (
            <div>
                <div className="aspect-ratio-placeholder">
                    <div className="indv-disp">
                        <img src={require(`../images/${this.props.post.disp}`)}/>
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
    let id = ownProps.match.params.post_id;
    console.log(id);
    return {
        post: state.posts.find(post => post.id === id)
    }
}



export default withRouter(connect(mapStateToProps)(Post));