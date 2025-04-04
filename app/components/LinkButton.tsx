'use client'

import Link from "next/link";
import styles from "./LinkButton.module.css";

interface LinkButtonProps {
  href: string;
  title: string;
}

export default function LinkButton({ href, title }: LinkButtonProps) {
  return (
    <>
      <Link className={styles.linkButton} href={href}>
        {title}
      </Link>
    </>
  );
}