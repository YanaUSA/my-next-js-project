import Heading from "../components/Heading";
import styles from "../styles/404.module.scss";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import {NextPage} from 'next'

const Error: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <div className={styles.wrapper}>
      <div>
        <Head>
          <title>Error</title>
        </Head>
        <Heading text="404" tag={"symbol"} />
        <Heading tag="h2" text="Something went wrong..." />
      </div>
    </div>
  );
};
export default Error;
