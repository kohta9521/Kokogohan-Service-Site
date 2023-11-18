import styles from "../styles/page.module.css";

// components import
import Hero from "@/components/organisms/Hero";
import Header from "@/components/organisms/Header";
import About from "@/components/organisms/About";
import Service from "@/components/organisms/Service";
import Ranking from "@/components/organisms/Ranking";
import Footer from "@/components/organisms/Footer";
import News from "@/components/organisms/News";
import Contact from "@/components/organisms/Contact";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <About />
      <Service />
      <Ranking />
      <News />
      <Contact />
      <Footer />
    </main>
  );
}
