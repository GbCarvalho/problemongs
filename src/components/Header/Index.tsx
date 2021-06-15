import { SignInButton } from './SignInButton'
import styles from './styles.module.scss'
import {ActiveLink} from '../ActiveLink'
export function Header(){

    return (
        <header className={styles.headerContainer}>
            <div className = {styles.headerContent}>
                <img src="/images/logo.svg" alt="Ig News" />
                <nav>
                    <ActiveLink activeClass={styles.active} href='/'>
                        <a>Home</a>
                    </ActiveLink>
                    <ActiveLink activeClass={styles.active} href='/posts'>
                        <a>Posts</a>
                    </ActiveLink>
                    
                    
                </nav>
                <SignInButton />
            </div>
        </header>
    );
}