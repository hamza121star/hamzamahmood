import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Grid, Cell} from 'react-mdl'
import {connect} from 'react-redux';


class Writing extends Component {
    render() {
        console.log(this.props);
        const { posts } = this.props;
        const postList = posts.length ? (
            posts.map(post => {
                return(
                    <div className="post-parent">
                        <Grid>
                                <div className="post-card" key={post.id}>
                                    <div className="card-content" style={{display:'inline-block'}}>
                                        <Link className="writing-card-title" to={'/' + post.id}>
                                            <span>{post.title}</span>
                                        </Link>
                                        <div>
                                            <p>{post.body}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="blog-picture" >
                                        <img src = {require(`../images/${post.disp}`)} alt="Write" />
                                    </div>
                                </div>
                        </Grid>
                    </div>
                )
            })
        ) : (
            <div className="center">No posts to show</div>
        );
        return(
            <div>
                <div className="container home">
                    <h4 className="writings-heading"> Writings </h4>
                    {postList}
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Writing);