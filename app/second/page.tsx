'use client';

import LinkButton from "../components/LinkButton";
import styles from "./second.module.css";
import Link from "next/link";
export default function Second() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Second Page</h1>
      <p>This is the second page of the application.</p>
      <LinkButton href="/" title="volver"/>
    </div>
  );
}