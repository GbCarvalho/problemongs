import Link from "next/link";

import styles from "./styles.module.scss";

import { FiArrowRight } from "react-icons/fi";

interface ProblemCardProps {
  title: string;
  description: string;
  slug: string;
}

export function ProblemCard({ title, description, slug }: ProblemCardProps) {
  return (
    <div className={styles.problemCardContainer}>
      <div className={styles.problemDescription}>
        <h1>{title}</h1>
        <p className={styles.problemText}>{description}</p>
      </div>
      <Link href={`/problems/${slug}`}>
        <a className={styles.problemLinkSolve}>
          Visualizar Problema{" "}
          <FiArrowRight size="1.5rem" className={styles.arrowIcon} />
        </a>
      </Link>
    </div>
  );
}
