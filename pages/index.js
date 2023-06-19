import styles from "../styles/Home.module.scss";
import Head from "next/head";
import Heading from "../components/Heading";
import Socials from "../components/Socials";
import { GetStaticProps, NextPage } from "next";
import { socialsType } from "../types";

type socialsProps = {
  socials: socialsType[],
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetch(`${process.env.API_HOST}/socials`);
    const data = await response.json();

    if (!data) {
      return {
        notFound: true,
      };
    }

    return {
      props: { socials: data },
    };
  } catch {
    return {
      props: { socials: null },
    };
  }
};

const Home: NextPage<socialsProps> = ({ socials }) => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Home</title>
      </Head>
      <Heading text="Hello Next.js!" tag={undefined} />
      <Socials socials={socials} />
    </div>
  );
};
export default Home;
