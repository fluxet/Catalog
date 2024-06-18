export type TFile = {
  name: string;
  type?: string;
  mime?: string;
  path?: string;
};

export type TFolder = {
  name: string;
  children: TChildren;
  type: string;
  path?: string;
  expandedFolders?: string[];
};

export type TChild = (TFile | TFolder) & {
  expandedFolders?: string[];
}

export type TChildren = TChild[];

export type TApp = {
  data: TChildren;
  expandedFolders?: string[];
}
