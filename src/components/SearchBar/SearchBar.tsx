import React, { Component } from 'react';
import { SearchBarProps } from '../../types';
import styles from './SearchBar.module.css';


class SearchBar extends Component<SearchBarProps> {
  render() {
    const { inputValue, onInputChange, onInputFocus, onSearchClick, onClearClick } = this.props;

    return (
      <div className={styles.search}>
        <input
          onInput={onInputChange}
          onFocus={onInputFocus}
          type='text'
          value={inputValue}
          placeholder='Filename search'
        />
        <button onClick={onSearchClick} type='button'>Search</button>
        <button onClick={onClearClick} type='button'>Clear</button>
      </div>
    );
  }
}

export default SearchBar;