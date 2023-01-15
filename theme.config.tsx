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
      <meta property="og:description" content="" />
    </>
  ),
}
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
import { NextSeo } from 'next-seo'
 
const Head = () => {
  const { asPath } = useRouter()
  const { frontMatter } = useConfig()
  return (
    <>
      <NextSeo 
        titleTemplate="%s – SWR" 
        openGraph={{
          url: https://vegandocss.vercel.app/ ${asPath},
          title: frontMatter.title || 'Vegan Docs',
          description: frontMatter.description || ' '
        }}
      />
    </>
  )
}
 
export default Head



  
   
      
   
          
     











