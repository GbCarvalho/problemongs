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
      <h1>{title}</h1>
      <div className={styles.problemDescription}>
        <p className={styles.problemText}>{description}</p>
        <div>
          <p className={styles.problemLinkSolve}>
            Visualizar Problema{" "}
            <FiArrowRight size="1.5rem" className={styles.arrowIcon} />
          </p>
        </div>
      </div>
    </div>
  );
}
