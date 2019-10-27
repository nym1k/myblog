import React, { Component } from 'react';
import axios from 'axios';

import classes from './Form.module.css';

class Form extends Component {
    state = {
        postTitle: '',
        postBody: '',
        loading: false
    }

    formSubmitHandler = (e) => {
        e.preventDefault();
        if (this.state.postTitle !== '' && this.state.postBody !== '') {
          this.setState({loading: true})
          const post = {
              title: this.state.postTitle,
              body: this.state.postBody,
              author: 'Ross King',
              dateCreated: new Date()
          }
          axios.post('https://myblog-a0e46.firebaseio.com/posts.json', post)
              .then(res => {
                  this.setState({loading: false})
              })
              .catch(err => {
                  console.log(err);
                  this.setState({loading: false})
              })
        } else {
          window.alert('Please enter some post content.')
        }

    }

    render() {
        return (
            <div className={classes.Form}>
                <h1>Create Post</h1>
                <p>{this.state.postTitle}</p>
                <p>{this.state.postBody}</p>
                <form action="/">
                  <input
                      type="text"
                      className={classes.FormInput}
                      value={this.state.postTitle}
                      onChange={(e) => { this.setState({postTitle: e.target.value}) }}
                      placeholder="Post Title"
                      />
                  <textarea
                      className={classes.FormInput}
                      value={this.state.postBody}
                      onChange={(e) => { this.setState({postBody: e.target.value}) }}
                      placeholder="Post Body"
                      rows="4"
                  />
                  <input
                      type="submit"
                      value="Submit"
                      onClick={this.formSubmitHandler}
                  />
                </form>
            </div>
        )
    }
}

export default Form;