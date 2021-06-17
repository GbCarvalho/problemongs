import styles from "./styles.module.scss";

import { IoDocumentText } from "react-icons/io5";
import { ProblemSolution } from "./../../components/ProblemSolution";
import { GetServerSideProps, GetStaticProps } from "next";
import { getPosts, getSinglePost } from "../../services/ghost";
import { HtmlHTMLAttributes } from "react";

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
  html: HTMLAllCollection;
  primary_author: Author;
}

interface ProblemPageProps {
  problem: Problem;
}

export default function ProblemPage({ problem }: ProblemPageProps) {
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
          <button>
            <IoDocumentText size="1.6rem" className={styles.documentIcon} />
            NOVA SOLUÇÃO
          </button>
        </div>
        <ProblemSolution />
        <ProblemSolution />
        <ProblemSolution />
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const problems = await getPosts();

  const paths = problems.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const problem = await getSinglePost(context.params.slug);

  if (!problem) {
    return {
      notFound: true,
    };
  }

  console.log(problem);

  return {
    props: { problem },
  };
};
