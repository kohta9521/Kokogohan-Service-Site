import styles from "./page.module.css";

// components import
import Header from "@/components/organisms/Header";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
    </main>
  );
}
