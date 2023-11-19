import styles from "../styles/page.module.css";

// components import
import Hero from "@/components/organisms/Hero";
import About from "@/components/organisms/About";
import Service from "@/components/organisms/Service";
import Ranking from "@/components/organisms/Ranking";
import News from "@/components/organisms/News";
import MainLayout from "@/components/templates/MainLayout";

export default function Home() {
  return (
      <MainLayout
        id={1}
      >
        <Hero />
        <About />
        <Service />
        <Ranking />
        <News />
      </MainLayout>
  );
}
