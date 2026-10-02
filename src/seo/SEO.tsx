import React from 'react';
import { Helmet } from 'react-helmet-async';
import type { Language } from '../i18n/types';

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  language?: Language;
  ogImage?: string;
  jsonLd?: object | object[];
  breadcrumbs?: { label: string; path: string }[];
}

const BASE_URL = 'https://cvirms.gov.in';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-cover.jpg`;

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  path = '/',
  language = 'en',
  ogImage = DEFAULT_OG_IMAGE,
  jsonLd,
  breadcrumbs,
}) => {
  const canonicalUrl = `${BASE_URL}${path}`;

  const hreflangs: { lang: string; url: string }[] = [
    { lang: 'en', url: canonicalUrl },
    { lang: 'kn', url: `${BASE_URL}${path}?lang=kn` },
    { lang: 'hi', url: `${BASE_URL}${path}?lang=hi` },
    { lang: 'ta', url: `${BASE_URL}${path}?lang=ta` },
    { lang: 'te', url: `${BASE_URL}${path}?lang=te` },
    { lang: 'ml', url: `${BASE_URL}${path}?lang=ml` },
    { lang: 'mr', url: `${BASE_URL}${path}?lang=mr` },
    { lang: 'x-default', url: canonicalUrl },
  ];

  // Build breadcrumb JSON-LD
  const breadcrumbLd = breadcrumbs
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: BASE_URL,
          },
          ...breadcrumbs.map((b, i) => ({
            '@type': 'ListItem',
            position: i + 2,
            name: b.label,
            item: `${BASE_URL}${b.path}`,
          })),
        ],
      }
    : null;

  const allJsonLd = [
    ...(Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : []),
    ...(breadcrumbLd ? [breadcrumbLd] : []),
  ];

  return (
    <Helmet>
      {/* Core */}
      <html lang={language} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Keywords */}
      <meta name="keywords" content="CVIRMS, visitor management system, hotel guest management, PG compliance software India, digital visitor log, law enforcement software India, Karnataka police, guest registration system" />
      <meta name="author" content="Karnataka State Police & EDCS" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="CVIRMS — Government of Karnataka" />
      <meta property="og:locale" content={language === 'kn' ? 'kn_IN' : language === 'hi' ? 'hi_IN' : 'en_IN'} />

      {/* Twitter / X Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@karnatakapolice" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* hreflang International SEO */}
      {hreflangs.map(({ lang, url }) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={url} />
      ))}

      {/* JSON-LD Structured Data */}
      {allJsonLd.map((ld, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(ld, null, 0)}
        </script>
      ))}
    </Helmet>
  );
};
