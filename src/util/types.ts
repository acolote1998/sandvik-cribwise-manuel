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

export type CribwiseWarehouseItemType = {
  id: string;
  itemName: string;
  new: number;
  used: number;
  refurb: number;
  forService: number;
  pickedQuantity: number;
  location: number;
  maxQuantity: number;
  orderPoint: number;
  minQuantity: number;
  criticalLevel: number;
  missingToMax: number;
  state: boolean;
  activeOrders: number;
  expectFromOrders: number;
  expectedDate: string;
};
