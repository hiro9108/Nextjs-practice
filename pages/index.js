import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>
            <Link href="/blog">
              <a>Move to Blog</a>
            </Link>
          </h1>
        </main>
      </div>
    </Layout>
  );
}
