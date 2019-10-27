import React, { Component } from 'react';
import axios from 'axios';
import Post from './Post/Post';
import classes from './Posts.module.css';

class Posts extends Component {
  state = {
    posts: []
  }

  componentDidMount () {
    axios.get('https://myblog-a0e46.firebaseio.com/posts.json')
      .then(res => {
        const posts = Object.values(res.data);
        this.setState({ posts: posts })
      })
      .catch(error => {
        console.log(error);
      })
  }

  render () {
    return (
      <div className={classes.Posts}>
        <h1>Latest Posts</h1>
        <ul>
          {this.state.posts !== '' ? this.state.posts.map(post => (
            <li key={post.dateCreated}>
              <Post post={post} />
            </li>
          ))
          : null}
        </ul>
      </div>
    )
  }
}

export default Posts;