import "../styles/globals.scss";
import Layout from "../components/Layout";
import Image from "next/image";
import youtubeImg from "../public/youtube.png";

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <main>
      <Component {...pageProps} />
    </main>
    <Image
      src={youtubeImg}
      width={300}
      height={350}
      alt="preview"
      placeholder="blur"
    />
  </Layout>
);

export default MyApp;
