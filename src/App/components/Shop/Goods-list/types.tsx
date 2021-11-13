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
  displayType: string;
  displayAssets: IDisplayAsset[];
  price: IPrice[];
}
