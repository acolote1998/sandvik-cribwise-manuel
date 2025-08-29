export type SandvikNavBarItemType = {
  id: number;
  name: string;
  route?: string;
};

export type SandvikInterimItemType = {
  id: number;
  name: string;
  url: string;
  iconUrl: string;
};

export type SandvikArticleItemType = {
  id: number;
  type?: string;
  date: string;
  description: string;
  url: string;
  pictureUrl?: string;
};
