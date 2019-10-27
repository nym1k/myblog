import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';

const header = () => (
  <header className={classes.Header}>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/new-post">New Post</Link></li>
      </ul>
    </nav>
  </header>
)

export default header;