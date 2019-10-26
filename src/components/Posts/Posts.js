import React from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Post from './Post/Post';

const posts = (props) => (
    <Aux>
    <ul>
      {props.posts.map(post => (
          <li>
            <Post post={post} />
          </li>
      ))}
    </ul>
    </Aux>
)

export default posts;