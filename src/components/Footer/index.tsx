import styles from './styles.module.scss';

export function Footer(){
    return(
        <div className={styles.footerContainer}>
            <div className={styles.copyText}>
                <p>© 2021 Problemong. All rights reserved</p>
            </div>
        </div>
    );
}