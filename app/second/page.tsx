'use client';

import Title from "../components/Title";
import styles from "./second.module.css";
export default function Second() {
  return (
    <div className={styles.container}>
      <Title title="Second Page" />
    </div>
  );
}