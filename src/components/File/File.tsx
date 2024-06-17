import React, { Component } from 'react';
import styles from './File.module.css';
import { TFile } from '../../types';
import { ReactComponent as FileSvg } from '../../assets/file-text.svg';

class File extends Component<TFile> {
  render() {
    const { name } = this.props;

    return (
      <div className={styles.container}>
        <FileSvg />
        <div>{name}</div>
      </div>
    );
  }
}

export default File;