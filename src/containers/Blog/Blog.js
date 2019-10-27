import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Form from '../../components/Form/Form';
import Posts from '../../components/Posts/Posts';
import classes from './Blog.module.css';

class Blog extends Component {
    render () {
        return (
            <div className={classes.Blog}>
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={Form} />
            </div>
        )
    }
}

export default Blog;