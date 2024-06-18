import React, { Component } from 'react';
import styles from './Folder.module.css';
import { TFolder } from '../../types';
import { ReactComponent as FolderSVGPlus } from '../../assets/folder-plus.svg';
import { ReactComponent as FolderSVGMinus } from '../../assets/folder-minus.svg';
import List from '../List/List';
import { isExpandedFolder, isVisibleBySearch } from '../../utils';

class Folder extends Component<TFolder, { areChildrenVisible: boolean }> {
  constructor(props: TFolder) {
    super(props);
    const { path, expandedFolders, isSearching } = props;

    this.state = {
      areChildrenVisible: isSearching ? true : isExpandedFolder(path, expandedFolders),
    };
  }

  componentDidUpdate(prevProps: TFolder) {
    if (prevProps.isSearching !== this.props.isSearching && this.props.isSearching) {
      this.setState({ areChildrenVisible: true });
    }
  }

  handleChildrenShow = () => {
    this.setState((prevState) => ({
      areChildrenVisible: !prevState.areChildrenVisible,
    }));
  }

  render() {
    const { name, children, path, expandedFolders, searchedPaths, isSearching } = this.props;
    const { areChildrenVisible } = this.state;
    const isFolderVisible = isVisibleBySearch(searchedPaths, path) || !isSearching

    return isFolderVisible && (
      <div className={styles.container}>
        <button className={styles.folder} type='button' onClick={this.handleChildrenShow}>
          {areChildrenVisible ? <FolderSVGMinus /> : <FolderSVGPlus />}
          <div>{name}</div>
        </button>
        {areChildrenVisible && (
          <div className={styles.children}>
            {children?.map((child) => (
              <List
                searchedPaths={searchedPaths}
                key={child.name}
                expandedFolders={expandedFolders}
                path={path}
                isSearching={isSearching}
                {...child}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Folder;
