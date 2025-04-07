"use client";

import Title from "./components/Title";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <Title title="Página Principal" />
    </div>
  );
}
