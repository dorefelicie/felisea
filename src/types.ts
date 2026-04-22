export interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  category: 'bikini' | 'one-piece' | 'jewelry';
}

export type Page = 'home' | 'collection' | 'about' | 'contact';
