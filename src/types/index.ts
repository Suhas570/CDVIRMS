export type Page = 'home' | 'about' | 'features' | 'tutorials' | 'news' | 'resources';

export interface BreadcrumbItem {
  label: string;
  page?: Page;
}
