import styles from './styles.module.scss';

import { IoIosArrowDown } from 'react-icons/io';

export function Main() {
    return (
        <div className={styles.conteudoContainer}>

            <div className={styles.mainTittle}>
                <h1>Ajude a resolver problemas reais de ONGS</h1>

                <div className={styles.buttonsContainer}>
                    <button className={styles.solveProblemButton}>Resolver Problemas</button>
                    <button className={styles.purpouseProblem}>Sou uma ONG</button>
                </div>
            </div>

            <img src="/images/Background.png" />

            <div className={styles.arrowDown}>
                <IoIosArrowDown size="2.5rem" color="#5ECC5B" />
            </div>
        </div>
    );
}