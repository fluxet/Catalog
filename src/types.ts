export type TFile = {
  name: string;
  type?: string;
  mime?: string;
};

export type TFolder = {
  name: string;
  children: TChildren;
  type: string;
};

export type TChild = (TFile | TFolder);

export type TChildren = TChild[];
