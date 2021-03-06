import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Grid, Cell} from 'react-mdl'
import {connect} from 'react-redux';


class Writing extends Component {
    render() {
        const { posts } = this.props;
        const postList = posts.length ? (
            posts.map(post => {
                return(
                    <div className="post-parent col-sm-12 col-md-12 col-lg-12 post-card">
                        <Grid>
                                <Link style={{color:'black'}} to={'/' + post.name}>
                                    <div key={post.name}>
                                        <Cell col={8} className="card-content" style={{display:'inline-block'}}>
                                            <div className="writing-card-title">
                                                <span>{post.title}</span>
                                            </div>
                                            <div style={{padding: '10px 0px'}}>
                                                <p>{post.summary}</p>
                                            </div>
                                        </Cell>
                                        <Cell col={4} className="blog-picture" >
                                            <img src = {require(`../assets/images/${post.disp}`)} alt="Write" />
                                        </Cell>
                                    </div>
                                </Link>
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