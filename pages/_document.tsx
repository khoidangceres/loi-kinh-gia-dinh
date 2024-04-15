import Document, { Head, Html, Main, NextScript } from "next/document";
import siteMetadata from "../utils/siteMetadata";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content={siteMetadata.description}
          />
          <meta property="og:site_name" content="nextjsconf-pics.vercel.app" />
          <meta
            property="og:description"
            content={siteMetadata.description}
          />
          <meta property="og:title" content={siteMetadata.title} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={siteMetadata.title} />
          <meta
            name="twitter:description"
            content={siteMetadata.description}
          />
        </Head>
        <body className=" antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
