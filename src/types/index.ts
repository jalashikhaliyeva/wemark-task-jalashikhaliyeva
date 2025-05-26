export interface HeroItem {
  button_url: string;
  image: string;
}

export type HeroData = HeroItem[];


export interface ServiceFeature {
  title: string;
  description: string;
  icon: string;
  image: string;
  image_redirect_url: string | null;
}

export type ServiceFeatureData = ServiceFeature[];