import React, { Component } from 'react';
import './App.css';
import List from './components/List/List';
import { TApp } from './types';


class App extends Component<TApp> {
  render() {
    const { data, expandedFolders } = this.props;

    return (
      <div className="app">
        {data.map(child => (
          <List
            key={child.name}
            path="."
            expandedFolders={expandedFolders}
            {...child}
          />
        ))}
      </div>
    );
  }
}

export default App;