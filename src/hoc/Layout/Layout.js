import React, { Component } from 'react';

import Aux from '../Auxiliary/Auxiliary';
import Header from '../../components/UI/Header/Header';
import classes from './Layout.module.css';

class Layout extends Component {
  render () {
    return (
      <Aux>
        <Header />
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}


export default Layout;