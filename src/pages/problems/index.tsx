import styles from "./styles.module.scss";
import { ProblemCard } from "../../components/ProblemCard";
import { GetStaticProps } from "next";
import { getPosts } from "../../services/ghost";

interface Problem {
  slug: string;
  title: string;
  excerpt: string;
}

interface ProblemsProps {
  problems: Problem[];
}

export default function ProblemsList({ problems }: ProblemsProps) {
  return (
    <div className={styles.listProblemsContent}>
      <div className={styles.listProblemContainer}>
        {problems.map((problem) => (
          <ProblemCard
            key={problem.slug}
            title={problem.title}
            description={problem.excerpt}
            slug={problem.slug}
          />
        ))}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const problems = await getPosts();

  return {
    props: { problems },
    revalidate: 60 * 5, // 5 minutes
  };
};
