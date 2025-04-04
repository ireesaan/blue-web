"use client";

import LinkButton from "./components/LinkButton";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Página Principal</h1>
      <LinkButton href="/second" title="second"/>
    </div>
  );
}
