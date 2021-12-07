import Head from "next/head";
import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="keywords" content="Avneesh, Agarwal, Avneesh Agarwal, web dev, blogger, content creator" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <div className="h-[10vh]">
        <Header />
      </div>

      <main className="relative mb-10 ml-5">
        <Intro />
        <About />
        <Testimonials />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
