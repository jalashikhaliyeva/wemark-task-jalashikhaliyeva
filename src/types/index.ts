export interface HeroItem {
  button_url: string;
  image: string;
}

export type HeroData = HeroItem[];

export interface HeroProps {
  data: HeroData;
}

export interface ServiceFeature {
  title: string;
  description: string;
  icon: string;
  image: string;
  image_redirect_url: string | null;
}

export type ServiceFeatureData = ServiceFeature[];
export interface ServicesProps {
  data: ServiceFeatureData;
}

export interface Product {
  id: number;
  product_code: number;
  name: string;
  slug: string;
  price: number;
  discount: string;
  discounted_price: number;
  perMonth: {
    month: number;
    price: number;
  };
  quantity: number;
  reviewCount: number;
  rate: number;
  image: string;
  campaign_widgets: unknown[];
  gift_widgets: unknown[];
  is_online: boolean;
  is_basket: boolean;
  is_favorite: boolean;
  is_compare: boolean;
}

export interface ProductCategory {
  title: string;
  products: Product[];
}

export type ProductsData = ProductCategory[];
export interface ProductsProps {
  products: Product[];
}


export interface OfferedProductsProps {
  data: ProductCategory[];
}

export interface CategoryNavigationProps {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}