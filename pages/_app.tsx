import {AppProps} from 'next/app'
import "../styles/globals.scss";
import Layout from "../components/Layout";
import Image from "next/image";
import youtubeImg from "../public/youtube.png";

const MyApp = ({ Component, pageProps }:AppProps) => (
  <Layout>
    <main>
      <Component {...pageProps} />
    </main>
    <Image
      src={youtubeImg}
      width={100}
      height={150}
      alt="preview"
      placeholder="blur"
    />
  </Layout>
);

export default MyApp;
