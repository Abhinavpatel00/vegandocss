import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const logo = (
  <svg width="50" height="50">
  <circle cx="25" cy="25" r="24" fill="#8BC34A"/>
  <path d="M37 18c0-3.314-2.686-6-6-6s-6 2.686-6 6 2.686 6 6 6 6-2.686 6-6zM20 18c0-3.314 2.686-6 6-6s6 2.686 6 6-2.686 6-6 6-6-2.686-6-6z" fill="#fff"/>
</svg>

);

const head = (
  <>
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="theme-color" content="#ffffff" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="Content-Language" content="en" />
    <meta
      name="description"
      content="Explore our comprehensive vegan documentation to learn about the benefits of a plant-based diet"
    />
    <meta
      name="og:description"
      content="Explore our comprehensive vegan documentation to learn about the benefits of a plant-based diet"
    />
    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:image"
      content="https://github.com/guglu-paglu/vegandocss/tree/main/images/vegandocssss.jpg"
    />
    <meta
      name="twitter:site:domain"
      content="https://github.com/guglu-paglu/vegandocss"
    />
    <meta
      name="twitter:url"
      content="https://github.com/guglu-paglu/vegandocss"
    />
    <meta name="og:title" content="The Most comprehensive Vegan's documentation" />
    <meta
      name="og:image"
      content="https://github.com/guglu-paglu/vegandocss/tree/main/images/vegandocssss.jpg"
    />
    <meta
      name="apple-mobile-web-app-title"
      content="Vegan docs"
    />
    <link rel="icon" href="/favicon-16x16.png" type="image/png" />
  </>
);

const config: DocsThemeConfig = {
  logo,
  project: {
    link: "https://github.com/guglu-paglu/vegandocss",
  },

  docsRepositoryBase:
    "https://github.com/guglu-paglu/vegandocss/blob/main",
  useNextSeoProps: () => {
    const { route } = useRouter();
    const titleTemplate =
      route === "/" ? "Vegan's documentation" : "%s - Vegan docs";
    return {
      titleTemplate,
    };
  },
  head,
  footer: {
    text: () => (
      <div>
        <p>© 2023 🐇 Vegan docs</p>
        <p>
          From{" "}
          <a href="https://vegandocss.vercel.app/" style={{ fontWeight: "bold" }}>
            Vegan docs
          </a>{" "}
          team
        </p>
      </div>
    ),
  },
  feedback: {
    content: () => <>Question? Give us feedback ↗</>,
    labels: "feedback",
  },
  banner: {
    key: "beta-release",
    text: (
      <a
        href="https://github.com/guglu-paglu/vegandocss"
        target="_blank"
        rel="noreferrer"
      >
        🐇 Vegan docs is open source so that Vegans like you can also help us. Feel free to
        contribute ↗
      </a>
    ),
  },
};

export default config;
  
   
      
     
      
   




  
  

   
      
       
        
         

        

 



 















  





  

   






 








