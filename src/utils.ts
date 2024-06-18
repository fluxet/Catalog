import { TChild, TData, TFile, TFolder, TSearchAcc, TSearchedPaths } from './types';

export const isFolder = (child: TFile | TFolder): child is TFolder => {
  return child.type === 'FOLDER';
}

export const isExpandedFolder = (currentPath = '', expandedFolders = ['']) =>
  expandedFolders.some(path => path === currentPath);

export const isVisibleBySearch = (searchedPaths = [''], path = '') => {
  const hasSearchedPath = searchedPaths?.some(searchedPath => searchedPath.substring(0, path?.length) === path);
  return hasSearchedPath;
};

export const searchPaths = (data: TData, str: string) => {
  const iter = (data: TData, str: string, acc: TSearchAcc): TSearchAcc => {
    if (data.children) {
      return data.children.reduce((childrenAcc: TSearchAcc, child: TChild) => {
        const childData: TData = child as TData;
        
        return iter(childData, str, {
          currentPath: `${acc.currentPath}/${data.name}`,
          paths: [...childrenAcc.paths],
        });
      }, acc);
    }

    const isMatch = data.name.includes(str) && data.type === 'FILE';
    const newCurrentPath = `${acc.currentPath}/${data.name}`
    
    return ({
      currentPath: newCurrentPath,
      paths: isMatch ? [...acc.paths, newCurrentPath] : acc.paths,
    });
  };

  return iter(data, str, { paths: [], currentPath: '.' }) as unknown as TSearchedPaths;
};

export const searchPathFromRoot = (data: TFolder[], text: string) =>
  data.reduce((acc: string[], child: TChild) => {
    const childData: TData = child as TData;

    return [...acc, ...searchPaths(childData, text).paths]
  }, []);