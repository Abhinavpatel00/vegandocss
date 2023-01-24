
import SEO from 'next-seo';

const config = {
  title: 'Vegn Docs',
  description: 'My website description',
  openGraph: {
    type: 'website',
    url: '',
    site_name: 'Vegan Documentation ',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};
<SEO config={config} />
