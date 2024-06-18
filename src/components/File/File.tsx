import React, { Component } from 'react';
import styles from './File.module.css';
import { TFile } from '../../types';
import { ReactComponent as FileSvg } from '../../assets/file-text.svg';
import { isVisibleBySearch } from '../../utils';

class File extends Component<TFile> {
  render() {
    const { name, searchedPaths, isSearching, path } = this.props;
    const isFileVisible = isVisibleBySearch(searchedPaths, path) || !isSearching;

    return isFileVisible && (
      <div className={styles.container}>
        <FileSvg />
        <div>{name}</div>
      </div>
    );
  }
}

export default File;