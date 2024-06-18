import { ChangeEvent } from 'react';

export type TFile = {
  name: string;
  type?: string;
  mime?: string;
  path?: string;
  searchedPaths?: string[];
  isSearching?: boolean;
};

export type TFolder = {
  name: string;
  children: TChildren;
  type: string;
  path?: string;
  expandedFolders?: string[];
  searchedPaths?: string[];
  isSearching?: boolean;
};

export type TChild = (TFile | TFolder) & {
  expandedFolders?: string[];
}

export type TChildren = TChild[];

export type TApp = {
  data: TChildren;
  expandedFolders?: string[];
}

export type TSearchAcc = {
  paths: string[];
  currentPath: string;
}

export type SearchBarProps = {
  inputValue: string;
  isSearching: boolean;
  onInputChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  onInputFocus: () => void;
  onSearchClick: () => void;
  onClearClick: () => void;
};