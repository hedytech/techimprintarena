import Document, { Head, Main, NextScript } from 'next/document';

export default class AppDocument extends Document {
  static async getInitialProps(ctx) {
    const isProduction = process.env.NODE_ENV === 'production';
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, isProduction };
  }

  setGoogleAnalytics() {
    return {
      __html: ''
    };
  }

  render() {
    const { isProduction } = this.props;
    return (
      <html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="dns-prefetch" href="//fonts.googleapis.com/" />
          <link rel="dns-prefetch" href="//www.google-analytics.com" />
          <link
            rel="sitemap"
            type="application/xml"
            title="Sitemap"
            href="/sitemap.xml"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:300,500i,900,900i"
            rel="stylesheet"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          />
          <meta
            name="description"
            content="At the Tech Imprint Arena, companies open up their inner core and tell you how they use today’s technology to make a tech imprint tomorrow"
          />
          <meta property="og:title" content=" Tech Imprint Arena" />
          <meta
            property="og:description"
            content="At the Tech Imprint Arena, companies open up their inner core and tell you how they use today’s technology to make a tech imprint tomorrow"
          />
          <meta
            property="og:image"
            content="https://techimprintarena.com/square-imprint-turquoise.png.png"
          />
          <meta name="twitter:title" content=" Tech Imprint Arena" />
          <meta
            name="twitter:description"
            content="At the Tech Imprint Arena, companies open up their inner core and tell you how they use today’s technology to make a tech imprint tomorrow"
          />
          <meta
            name="twitter:image"
            content="https://techimprintarena.com/square-imprint-turquoise.png.png"
          />
          <meta name="twitter:card" content="summary" />
        </Head>
        <body>
          <Main />
          <NextScript />
          {isProduction && (
            <>
              <script dangerouslySetInnerHTML={this.setGoogleAnalytics()} />
            </>
          )}
        </body>
      </html>
    );
  }
}
