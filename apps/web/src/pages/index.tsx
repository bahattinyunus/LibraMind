import Head from "next/head";

import { HeroCard } from "../components/HeroCard";
import { RoadmapList } from "../components/RoadmapList";

export default function Home() {
  return (
    <>
      <Head>
        <title>LibraMind</title>
      </Head>
      <main>
        <HeroCard />
        <RoadmapList />
      </main>
    </>
  );
}

