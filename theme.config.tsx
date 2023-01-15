import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>My Project</span>,
  project: {
    link: 'https://github.com/',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/',
  footer: {
    text: 'Vegan docs',
  },
}

export default {
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Vegn Documentation'
    }
  },
}

export default {
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Vegan Doc " />
      <meta property="og:description" content="Veganism the way to spread kindness" />
    </>
  ),
}



  
   
      
   
          
     











