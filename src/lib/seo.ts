import { siteMetadata } from '../data/seo-pages';

export interface MetadataProps {
  title?: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
  ogType?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
}

export function buildMetadata(props: MetadataProps) {
  const title = props.title ? `${props.title}` : `${siteMetadata.name} — ${siteMetadata.tagline}`;
  const description = props.description || siteMetadata.description;
  const canonical = props.canonical || siteMetadata.siteUrl;
  const noindex = Boolean(props.noindex);
  const ogType = props.ogType || 'website';

  return {
    title,
    description,
    canonical,
    noindex,
    ogType,
    publishedTime: props.publishedTime,
    modifiedTime: props.modifiedTime,
  };
}
