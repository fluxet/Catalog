import React, { ChangeEvent, Component } from 'react';
import './App.css';
import List from './components/List/List';

import { TApp } from './types';
import { searchPathFromRoot } from './utils';
import SearchBar from './components/SearchBar/SearchBar';


class App extends Component<TApp, { inputValue: string, isSearching: boolean }> {
  constructor(props: TApp) {
    super(props);
    this.state = {
      inputValue: '',
      isSearching: false,
    }
  }

  handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    this.setState((prevState) => ({
      ...prevState,
      inputValue: evt.target.value,
    }));
  }

  handleInputFocus = () => {
    this.setState((prevState) => ({
      ...prevState,
      inputValue: '',
      isSearching: false,
    }));
  }

  handleSearchClick = () => {
    this.setState((prevState) => ({
      ...prevState,
      isSearching: !!prevState.inputValue,
    }));
  }

  handleClearClick = () => {
    this.setState((prevState) => ({
      ...prevState,
      inputValue: '',
      isSearching: false,
    }));
  }

  render() {
    const { data, expandedFolders } = this.props;
    const { inputValue, isSearching } = this.state;
    const searchedPaths = isSearching ?  searchPathFromRoot(data, inputValue) : [];

    return (
      <div className='app'>
        <SearchBar
          inputValue={inputValue}
          isSearching={isSearching}
          onInputChange={this.handleInputChange}
          onInputFocus={this.handleInputFocus}
          onSearchClick={this.handleSearchClick}
          onClearClick={this.handleClearClick}
        />

        {data.map(child => (
          <List
            key={child.name}
            path='.'
            searchedPaths={searchedPaths}
            isSearching={isSearching}
            expandedFolders={expandedFolders}
            {...child}
          />
        ))}
      </div>
    );
  }
}

export default App;