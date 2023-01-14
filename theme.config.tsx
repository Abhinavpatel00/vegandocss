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




  
   
      
   
          
     











