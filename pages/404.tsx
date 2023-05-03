import { NextPage } from "next";
import Head from "next/head";

const Custom404: NextPage = () => {
  return (
    <>
      <Head>
        <title>404 - Not Found</title>
      </Head>
      <div className="flex flex-col items-center justify-center h-4/5">
        <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
        <p className="text-lg mt-4">
          Sorry, the page you are looking for does not exist.
        </p>
        <a
          href="/"
          className="mt-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded hover:opacity-75 transition-opacity duration-300 ease-in-out"
        >
          Back to Home
        </a>
      </div>
    </>
  );
};

export default Custom404;
