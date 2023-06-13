import styles from "../styles/Home.module.scss";
import Head from "next/head";
import Heading from "../components/Heading";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Home</title>
      </Head>
      <Heading text="Hello Next.js!" />
    </div>
  );
};
export default Home;
