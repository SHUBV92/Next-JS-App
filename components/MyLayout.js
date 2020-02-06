import Head from "next/head";
import Header from "./Header";

const layoutStyle = {
  display: "flex",
  justifycontent: "spaced-evenly",
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

const Layout = Page => {
  return () => (
    <div>
      <Head>
        <title>This is Mad</title>
        <link
          rel="stylesheet"
          href="https://bootswatch.com/4/cerulean/bootstrap.min.css"
        />
        <Header />
        <Page />
      </Head>
    </div>
  );
};

export default Layout;
