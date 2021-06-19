import styles from './styles.module.scss';

import { signIn, signOut, useSession } from 'next-auth/client'
import React, { useState } from 'react';
import { ModalLogin } from '../ModalLogin';
export function LoginButton() {

    const [showModal, setShowModal] = useState(false);
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
                onClick={() => setShowModal(!showModal)}
            >
                Login
            </button>
            {showModal ? <ModalLogin /> : null}
        </>

    );
}