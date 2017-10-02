import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, deletePost } from '../actions';
import { Link } from 'react-router-dom';

class PostsShow extends Component {

    componentDidMount() {
        const { id } = this.props.match.params // this.props.match.params.id
        this.props.fetchPosts(id);
    }

    onDeleteclick() {
        const { id } = this.props.match.params;

        this.props.deletePost(id, () => {
            this.props.history.push('/');
        });
    }
    render() {
        // this.props === ownProps
        const { post } = this.props;

        if(!post) {
            return <div>Loading... </div>
        }

        return(
            <div>
                <Link to='/' className='btn btn-primary' >Back To Index</Link>
                <button 
                    className='btn btn-danger pull-xs-right'
                    onClick = { this.onDeleteclick.bind(this) }
                >
                Delete
                </button>
                <h3>{post.title} </h3>
                <h6>categories: {post.categories} </h6>
                <p>{post.content} </p>
            </div>
        );
    }
}

function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPosts, deletePost } )(PostsShow);