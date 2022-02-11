import React, { FC, ReactChild, ReactChildren, ReactElement } from "react";
import Head from "next/head";
import moment from "moment"
import { useRouter } from "next/router";
import Navbar from "../../molecule/Navbar";

// import Navbar from "./Navbar";
// import Footer from "./Footer";

interface Props{
  children:ReactChild
}

export default function ContainerBlock({ children, ...customMeta }:Props) {
  const router = useRouter();

  const meta = {
    title: "Manu Arora - Developer, Writer, Creator and YouTuber",
    description: `I've been developing websites for 5 years straight. Get in touch with me to know more.`,
    image: "/avatar.png",
    type: "website",
    date: new Date(),
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://yourwebsite.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://yourwebsite.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Manu Arora" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mannupaaji" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={moment(meta.date).format("YYYY-MM-DD") } />
        )}
      </Head>
      <main className="bg-[#F1F1F1] dark:bg-gray-800 w-full">
        <Navbar />
        <div>{children}</div>
        {/* <Footer /> */}
      </main>
    </div>
  );
}