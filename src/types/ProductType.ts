export type ProductType = {
  _id?: string;
  name: string;
  slug: string;
  image: string;
  banner?: string;
  price: number;
  brand: string;
  description: string;
  category: string;
  rating: number;
  numberReviews: number;
  countInStock: number;
  colors?: [];
  sizes?: [];
};
