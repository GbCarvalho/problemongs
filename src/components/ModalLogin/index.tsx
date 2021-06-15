import styles from './styles.module.scss';

import { LoginBoxOptions } from './LoginBoxOptions';

export function ModalLogin() {
    return (
        <div className={styles.modalContainer}>
            <h1>Log in with</h1>
            <p className={styles.modalDescription}>create a account to start help ongs with they problems</p>
            <p className={styles.modalDescription}>continue with...</p>
            <div className={styles.modalOptionsLogin}>
                <LoginBoxOptions media="Github" />
                <LoginBoxOptions media="LinkedIn" />
                <LoginBoxOptions media="Google" />
            </div>
        </div>
    );
}