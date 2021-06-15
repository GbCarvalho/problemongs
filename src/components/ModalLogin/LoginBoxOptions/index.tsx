import styles from './styles.module.scss';

import { FaGithub, FaLinkedin, FaGoogle } from 'react-icons/fa';

export function LoginBoxOptions(props) {
    return (
        <div className={styles.loginBoxContainer}>
            <div className={styles.loginBoxContent}>
                {props.media === "Github" ? <FaGithub size="3.5rem" color="#333333" /> : props.media === "LinkedIn" ? <FaLinkedin size="3.2rem" color="#0E76A8" /> : <FaGoogle size="3.2rem" color="#EA4335" />}
                <span>{props.media}</span>
            </div>
        </div>
    );
}