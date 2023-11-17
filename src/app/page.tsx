import styles from "./page.module.css";

// components import
import Hero from "@/components/organisms/Hero";
import Header from "@/components/organisms/Header";
import About from "@/components/organisms/About";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Hero />
      <About />
    </main>
  );
}
