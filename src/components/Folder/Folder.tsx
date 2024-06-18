import React, { Component } from 'react';
import styles from './Folder.module.css';
import { TFolder } from '../../types';
import { ReactComponent as FolderSVGPlus } from '../../assets/folder-plus.svg';
import { ReactComponent as FolderSVGMinus } from '../../assets/folder-minus.svg';
import List from '../List/List';
import { isExpandedFolder } from '../../utils';

class Folder extends Component<TFolder, { areChildrenVisible: boolean }> {
  constructor(props: TFolder) {
    super(props);
    this.state = {
      areChildrenVisible: isExpandedFolder(props.path, props.expandedFolders),
    };
  }

  handleChildrenShow = () => {
    this.setState((prevState) => ({
      areChildrenVisible: !prevState.areChildrenVisible
    }));
  }

  render() {
    const { name, children, path, expandedFolders } = this.props;
    const { areChildrenVisible } = this.state;

    return (
      <div className={styles.container}>
        <button className={styles.folder} type='button' onClick={this.handleChildrenShow}>
          {areChildrenVisible ? <FolderSVGMinus /> : <FolderSVGPlus />}
          <div>{name}</div>
        </button>
        {areChildrenVisible && (
          <div className={styles.children}>
            {children?.map((child) => <List key={child.name} expandedFolders={expandedFolders} {...child} path={path} />)}
          </div>
        )}
      </div>
    );
  }
}

export default Folder;
