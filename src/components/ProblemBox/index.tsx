import styles from "./styles.module.scss";

import { FiArrowRight } from 'react-icons/fi';

export function ProblemCard() {
    return (
        <div className={styles.problemCardContainer}>
            <h1>Problema X</h1>
            <div className={styles.problemDescription}>
                <p className={styles.problemText}>Mussum Ipsum, cacilds vidis litro abertis. Paisis, filhis, espiritis santis. Quem num gosta di mé, boa gentis num é. Si num tem leite então bota uma pinga aí cumpadi! Suco de cevadiss deixa as pessoas mais interessantis.Quem num gosta di mé, boa gentis num é. Si num tem leite então bota uma pinga aí cumpadi! Suco de cevadiss deixa as pessoas mais interessantis.</p>
                <div>
                    <p className={styles.problemLinkSolve}>Visualizar Problema <FiArrowRight size="1.5rem" className={styles.arrowIcon} /></p>
                </div>
            </div>
        </div>
    );
}