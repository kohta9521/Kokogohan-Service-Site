import styles from "./page.module.css";

// components import
import Map from "../components/Map";
import Header from "@/components/organisms/Header";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
    </main>
  );
}
