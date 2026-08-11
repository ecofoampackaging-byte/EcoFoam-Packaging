export interface ProductSpecs {
  capacity: string;
  neckFinish: string;
  material: string;
  uvProtection: string;
  moq: string;
}

export interface ProductItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  badges: string[];
  specs: ProductSpecs;
}

export interface CatalogProduct extends ProductItem {
  subtext: string;
  material: string;
  finish: string;
  color: string;
}

export interface SampleKitBox {
  id: string;
  name: string;
  items: string;
  tag: string;
}

export interface CompanyStat {
  label: string;
  value: string;
}

export interface CompanyPillar {
  title: string;
  description: string;
}

export interface GlobalHub {
  name: string;
  role: string;
  location: string;
}
