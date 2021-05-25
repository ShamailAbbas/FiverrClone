import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import Sectionone from "../components/Sectionone";
import Sectiontwo from "../components/Sectiontwo";
import Sectionthree from "../components/Sectionthree";
import Sectionfive from "../components/Sectionfive";
import Sectionsix from "../components/Sectionsix";
import Sectionseven from "../components/Sectionseven";
import Sectionfour from "../components/Sectionfour";

import { useGlobalcontext } from "../AuthState";

export default function Home() {
  const router = useRouter();
  const { state } = useGlobalcontext();

  return (
    <div className="overflow-x-hidden text-white text-opacity-95">
      <Head>
        <title>Fiverr-Freelance Services Marketplace for Businesses</title>
        <link rel="icon" href="./logo.png" />
      </Head>
      <Navbar />
      <Sectionone />
      <Sectiontwo />
      <Sectionthree />
      <Sectionfour />
      <Sectionfive />
      <Sectionsix />
      <Sectionseven />
    </div>
  );
}
