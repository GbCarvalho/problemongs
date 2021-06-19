import styles from "./styles.module.scss";
import { ProblemCard } from './../../components/ProblemBox'

export default function ListagemProblemas() {
    return (
        <div className={styles.listProblemsContent}>
            <div className={styles.listProblemContainer}>
                <ProblemCard />
                <ProblemCard />
                <ProblemCard />
                <ProblemCard />
                <ProblemCard />
                <ProblemCard />
                <ProblemCard />
                <ProblemCard />
                <ProblemCard />
            </div>
        </div>
    );
}