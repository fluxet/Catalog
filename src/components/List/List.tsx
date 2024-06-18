import { Component } from 'react'
import { isFolder } from '../../utils'
import File from '../File/File'
import Folder from '../Folder/Folder'
import { TChild } from '../../types'


class List extends Component<TChild> {
  render() {
    const { name, type, path, expandedFolders, searchedPaths, isSearching } = this.props;
    const currentPath = `${path}/${name}`;
    
    return (
      <div>
        {isFolder(this.props)
          ? <Folder
              name={name}
              path={currentPath}
              children={this.props.children}
              type={type as string}
              expandedFolders={expandedFolders}
              searchedPaths={searchedPaths}
              isSearching={isSearching}
            />
          : <File
              name={name}
              path={currentPath}
              type={type}
              searchedPaths={searchedPaths}
              isSearching={isSearching}
            /> }
      </div>
    )
  }
}

export default List;