import styles from "./problem.module.scss";

import Link from "next/link";
import { IoDocumentText } from "react-icons/io5";
import { ProblemSolution } from "./../../components/ProblemSolution";
import { GetServerSideProps } from "next";
import { getSinglePost } from "../../services/ghost";
import { useRouter } from "next/dist/client/router";
import axios from "axios";

interface User {
  id: string;
  name: string;
  email: string;
}

interface Solution {
  id: string;
  name: string;
  usersId: User[];
  ongProblemId: string;
  description: string;
  github: string;
}

interface Author {
  name: string;
  profile_image: string;
  bio: string;
  website: string;
}

interface Problem {
  slug: string;
  title: string;
  excerpt: string;
  html: string;
  primary_author: Author;
}

interface ProblemPageProps {
  problem: Problem;
  solutions: Solution[];
}

export default function ProblemPage({ problem, solutions }: ProblemPageProps) {
  const router = useRouter();

  return (
    <div className={styles.problemPageContainer}>
      <div className={styles.problemPageContent}>
        <div className={styles.problemPageDescription}>
          <h1>{problem.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: problem.html }} />
        </div>
        <div className={styles.ongBlock}>
          <div className={styles.ongTexts}>
            <p>{problem.primary_author.name}</p>
            <p>{problem.primary_author.bio}</p>
          </div>
          <img
            className={styles.ongPicture}
            src={problem.primary_author.profile_image}
            alt="Logo da Ong"
          />
        </div>
        <div className={styles.newSolutionButton}>
          <button
            onClick={() => {
              router.push(`/solution/${problem.slug}`);
            }}
          >
            <IoDocumentText size="1.6rem" className={styles.documentIcon} />
            NOVA SOLUÇÃO
          </button>
        </div>
        {solutions.map((solution) => {
          return (
            <ProblemSolution
              key={solution.id}
              description={solution.description}
              link={solution.github}
              members={solution.usersId}
              title={solution.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params;

  const problem = await getSinglePost(slug);

  const solutions = (
    await axios.get(`${process.env.MY_API_URI}/projects/${slug}`)
  ).data as Solution[];

  if (!problem) {
    return {
      notFound: true,
    };
  }

  return {
    props: { problem, solutions },
  };
};
