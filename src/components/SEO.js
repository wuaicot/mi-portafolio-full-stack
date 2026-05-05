import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, keywords, image, url, type = "website" }) => {
  const siteName = "Naycol Linares | Full Stack Developer";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const defaultDescription = "Portafolio profesional de Naycol Rodolfo Linares Villasmil (Wuaicot), Desarrollador Full Stack especializado en React, Node.js y soluciones de IA.";
  const metaDescription = description || defaultDescription;
  const siteUrl = "https://mi-portafolio-full-stack.vercel.app/";
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const metaImage = image || `${siteUrl}avatar.png`;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={fullUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
    </Helmet>
  );
};

export default SEO;
