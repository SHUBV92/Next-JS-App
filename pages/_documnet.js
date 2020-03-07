import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getIntProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NavBar />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
