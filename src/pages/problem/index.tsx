import styles from "./styles.module.scss";

import { IoDocumentText } from 'react-icons/io5';
import { ProblemSolution } from './../../components/ProblemSolution';

export default function ProblemPage() {
    return (
        <div className={styles.problemPageContainer}>
            <div className={styles.problemPageContent}>
                <div className={styles.problemPageDescription}>
                    <h1>Problema x</h1>
                    <p>Morbi consequat et, vestibulum quam. Quam fusce sed hendrerit urna, ipsum at tellus euismod urna. Quisque integer morbi elit orci, sed consectetur vitae. Sed aenean elit id suspendisse facilisis et viverra. Leo a a vitae duis. Vivamus enim nunc in duis. Id cursus amet facilisi pellentesque ornare. Lacus egestas viverra amet ut.<br />
                        Enim et lacinia amet mauris tortor ut venenatis, amet. Donec suspendisse facilisi interdum suscipit convallis euismod varius ultrices. Ut in sed dolor amet. At duis donec turpis sagittis facilisi tempor rhoncus neque. Vivamus ut hendrerit ac velit. Egestas est in commodo tristique et eget nunc. Ipsum sagittis sed aliquet arcu tortor. Volutpat non lacus, facilisis pellentesque elementum est at integer egestas. Velit enim maecenas posuere risus, semper mi sed aliquam rhoncus. Bibendum imperdiet sapien, nec donec tellus. </p>
                </div>
                <div className={styles.ongName}>
                    <div className={styles.ongTexts}>
                        <p>Ong Name</p>
                        <p>Ong Slogan Description</p>
                    </div>
                    <img src="/images/logoOng.svg" alt="Logo da Ong" />
                </div>
                <div className={styles.newSolutionButton}>
                    <button><IoDocumentText size="1.6rem" className={styles.documentIcon} />NOVA SOLUÇÃO</button>
                </div>
                <ProblemSolution />
                <ProblemSolution />
                <ProblemSolution />
            </div>
        </div>
    );
}