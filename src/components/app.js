import React, { Component } from 'react';
import Header from './header';
import Search from '../container/search';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Search />
      </div>
    );
  }
}
