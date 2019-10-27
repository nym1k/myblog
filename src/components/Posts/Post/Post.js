import React from 'react';
import classes from './Post.module.css';

const post = (props) => {
    return (
      <div className={classes.Post}>
        <h3>{props.post.title}</h3>
        <p>{props.post.body}</p>
      </div>
    )
}

export default post;