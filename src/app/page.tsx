import styles from "./page.module.css";

import Map from "../components/Map";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>ここごはん</h1>
      <Map />
    </main>
  );
}
