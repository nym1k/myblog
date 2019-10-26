import React, { Component } from 'react';
import axios from 'axios';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Form from '../../components/Form/Form';
import Posts from '../../components/Posts/Posts';

class Blog extends Component {
    state = {
        posts: []
    }

    componentDidMount () {
        axios.get('https://myblog-a0e46.firebaseio.com/posts.json')
            .then(res => {
                const posts = Object.values(res.data);
                this.setState({posts: posts})
            })
            .catch(error => {
                console.log(error);
            })
    }

    render () {
        return (
            <Aux>
                <h1>Latest Posts</h1>
                {this.state.posts !== '' ? <Posts posts={this.state.posts} /> : null}
                <Form />
            </Aux>
        )
    }
}

export default Blog;