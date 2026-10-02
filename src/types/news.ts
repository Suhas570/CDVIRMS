export type NewsCategory = 'Update' | 'News' | 'Circular' | 'Awareness' | 'Training' | 'Alert';

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  category: NewsCategory;
  date: string;
  image: string;
  slug: string;
  readTime: string;
  issuer: string;
  content?: string[];
}
