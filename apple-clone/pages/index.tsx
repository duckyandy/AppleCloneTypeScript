import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Landing from "../components/Landing";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Apple Redesign</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="relative h-[200vh] bg-[#e7ecee]">
        <Landing />
      </main>
      <section className="relative z-40 -mt-[100vh]">
        <h1 className="text-center text-4xl font-medium tracking-wide text-[#95e5f0] md:text-5xl">
          New Promos
        </h1>
      </section>
    </div>
  );
};

export default Home;
