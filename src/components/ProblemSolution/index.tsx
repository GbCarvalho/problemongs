import styles from "./styles.module.scss";

import { UserIcon } from './UserIcon';
import { FiArrowRight } from 'react-icons/fi';

export function ProblemSolution() {
    return (
        <div className={styles.problemSolutionContainer}>
            <h2>Solução 1</h2>
            <p>Enim proin ut fermentum lacus. Et consequat consequat quis eros vel tortor elit. Vestibulum, vestibulum convallis congue tortor elementum vitae egestas feugiat consectetur. Facilisis orci consectetur convallis tempor pellentesque sem. Dignissim ut nunc, cursus et diam. Sit accumsan a eu ullamcorper convallis sed. Facilisis orci consectetur convallis tempor pellentesque sem. Dignissim ut nunc, cursus et diam. Sit accumsan a eu ullamcorper convallis sed. </p>
            <div className={styles.problemGrupoContainer}>
                <p>Grupo</p>
                <div className={styles.problemGrupoContainerIcons}>
                    <div className={styles.usersIconsBox}>
                        <UserIcon />
                        <UserIcon />
                        <UserIcon />
                        <UserIcon />
                    </div>
                    <p className={styles.problemLinkSolve}>Visualizar Problema <FiArrowRight size="1.5rem" className={styles.arrowIcon} /></p>
                </div>
            </div>
        </div>
    );
}