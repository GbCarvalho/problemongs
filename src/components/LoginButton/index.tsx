import styles from './styles.module.scss';

import { signIn, signOut, useSession } from 'next-auth/client'
export function LoginButton() {
    const [session] = useSession();
    return session ? (
        <>
            <button className={styles.loginButton}
                type="button"
                onClick={() => signOut()}
            >
                Logout
            </button>
        </>
    ) : (
        <>
            <button className={styles.loginButton}
                type="button"
                onClick={() => signIn('linkedin')}
            >
                Login
            </button>
        </>

    );
}