import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

const post = (props) => {
    return (
      <Aux>
        <h3>{props.post.title}</h3>
        <p>{props.post.body}</p>
      </Aux>
    )
}

export default post;