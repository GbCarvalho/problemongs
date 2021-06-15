import styles from './styles.module.scss';

import { FaGithub, FaLinkedin, FaGoogle } from 'react-icons/fa';

export function LoginBoxOptions(props) {
    return (
        <div className={styles.loginBoxContainer}>
            <div className={styles.loginBoxContent}>
                {props.media === "github" ? <FaGithub size="3.5rem" color="#333333" /> : props.media === "linkedin" ? <FaLinkedin size="3.5rem" color="#333333" /> : <FaGoogle size="3.2rem" color="#333333" />}
                <span>Github</span>
            </div>
        </div>
    );
}