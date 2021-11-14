export interface IDisplayAsset {
  background: string;
  full_background: string;
  url: string;
}

export interface IPrice {
  finalPrice: number;
  regularPrice: number;
}

export interface IGood {
  mainId: string;
  displayName: string;
  displayDescription: string;
  displayAssets: IDisplayAsset[];
  price: IPrice;
}

export interface ICartUnit {
  id: string;
  name: string;
  finalPrice: number;
  image: string;
  quantity: number;
}
