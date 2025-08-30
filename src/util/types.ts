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
  date?: string;
  description: string;
  text?: string;
  url: string;
  bigPictureUrl?: string;
  mediumPictureUrl?: string;
  urlText?: string;
  urlTextIconUrl?: string;
};

export type SandvikUpcomingEventItemType = {
  id: number;
  dateNumber: string;
  dateMonth: string;
  title: string;
};
export type FooterPageLinkItemType = {
  id: number;
  description: string;
  url: string;
};
