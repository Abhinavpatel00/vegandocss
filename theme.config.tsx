import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
import { NextSeo } from 'next-seo' 
    const Head = () => { 
    const { asPath } = useRouter()
    const { frontMatter } = useConfig()
     routerVariable = useRouter() return ( 
    <> 
     <NextSeo titleTemplate="%s – Vegn Documentation "
      openGraph={{ url:https://vegandocss.vercel.app/${asPath}, 
                  title:'Vegan Documentation',
                   description:' ', 
            }} 
         /> 
     </> 
   )
 } 
 export default Head 


import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs' 

     const config: DocsThemeConfig = 
      { logo: <span>My Project</span>,
       project: 
       { link: 'https://github.com/', }, 
       chat: 
       { link: 'https://discord.com', }, 
       docsRepositoryBase: 'https://github.com/',
       footer: { text:'vegan docs',
     },
}
export default{
 useNextSeoProps(){
   return{
     titleTemplate:'%s- Vegn Documentation'
   }
 },
}
export default{
  head:(
    <>
       <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta property="og:title" content="Vegan Doc" />
      <meta property="og:description" content=" " />
     < / >
   ),
}


 



  
  

   
      
       
        
         

        

 



 















  





  

   






 








