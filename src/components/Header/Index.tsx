import styles from './styles.module.scss';
import {LoginButton} from './../LoginButton/index';

export function Header() {

    return (
        <div className={styles.menuContainer}>
            <div className={styles.logoContainer}>
                <h1>PROBLEM<span>ONGS</span></h1>
            </div>
            <div className={styles.menuOptions}>
                <p>Sobre</p>
                <p>Contato</p>
                <LoginButton />
            </div>
        </div>
    );
}