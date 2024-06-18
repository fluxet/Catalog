import { TFile, TFolder, TSearchAcc } from './types';

export const isFolder = (child: TFile | TFolder): child is TFolder => {
  return child.type === 'FOLDER';
}

export const isExpandedFolder = (currentPath = '', expandedFolders = ['']) =>
  expandedFolders.some(path => path === currentPath);

export const isVisibleBySearch = (searchedPaths = [''], path = '') => {
  const hasSearchedPath = searchedPaths?.some(searchedPath => searchedPath.substring(0, path?.length) === path);
  return hasSearchedPath;
};

export const searchPaths = (data: any, str: string) => {
  const iter = (data: any, str: string, acc: TSearchAcc) => {
    if (data.children) {
      return data.children.reduce((childrenAcc: TSearchAcc, child: any) => iter(child, str, {
        currentPath: `${acc.currentPath}/${data.name}`,
        paths: [...childrenAcc.paths],
      }), acc);
    }

    const isMatch = data.name.includes(str) && data.type === 'FILE';
    const newCurrentPath = `${acc.currentPath}/${data.name}`
    
    return ({
      currentPath: newCurrentPath,
      paths: isMatch ? [...acc.paths, newCurrentPath] : acc.paths,
    })
  };

  return iter(data, str, { paths: [], currentPath: '.' });
};

export const searchPathFromRoot = (data: any, text: string) =>
  data.reduce((acc: string[], child: any) => [...acc, ...searchPaths(child, text).paths], []);