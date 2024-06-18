import { TFile, TFolder } from "./types";

export const isFolder = (child: TFile | TFolder): child is TFolder => {
  return child.type === 'FOLDER';
}

export const isExpandedFolder = (currentPath = '', expandedFolders = ['']) =>
  expandedFolders.some(path => path === currentPath)
