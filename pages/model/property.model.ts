export interface PropertyModel {
  title: string;
  slug: string
  address?: string;
  thumbnail?: string;
  description?: string;
  bedroom?: number;
  bathroom?: number;
  floorArea?: number;
  price?: number;
  forSale?: boolean;
  forRent?: boolean;
  imageCount?: number;
}