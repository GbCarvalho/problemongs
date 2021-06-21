import styles from "./styles.module.scss";

import { UserIcon } from "./UserIcon";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

interface User {
  id: string;
  name: string;
  email: string;
}

interface ProblemSolutionProps {
  title: string;
  description: string;
  members: User[];
  link: string;
}

export function ProblemSolution({
  title,
  description,
  members,
  link,
}: ProblemSolutionProps) {
  return (
    <div className={styles.problemSolutionContainer}>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className={styles.problemGrupoContainer}>
        <p>Grupo</p>
        <div className={styles.problemGrupoContainerIcons}>
          <div className={styles.usersIconsBox}>
            {members.map((member) => (
              <UserIcon name={member.name} />
            ))}
          </div>
          <Link href={link}>
            <p className={styles.problemLinkSolve}>
              Visualizar Problema{" "}
              <FiArrowRight size="1.5rem" className={styles.arrowIcon} />
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
