import { Component } from 'react'
import { isFolder } from '../../utils'
import File from '../File/File'
import Folder from '../Folder/Folder'
import { TChild } from '../../types'


class List extends Component<TChild> {
  render() {
    const { name, type } = this.props;
    
    return (
      <div>
        {isFolder(this.props)
          ? <Folder name={name} children={this.props.children} type={type as string} />
          : <File name={name} type={type} /> }
      </div>
    )
  }
}

export default List;