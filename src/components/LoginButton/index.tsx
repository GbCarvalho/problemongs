import styles from './styles.module.scss';
import {FaLinkedin} from 'react-icons/fa'

import {signIn, signOut, useSession} from 'next-auth/client'
export function LoginButton(){
    const [session] = useSession();
    return session ? (
            <>
                <button className={styles.loginButton}
                    type= "button"  
                    onClick = {()=>signOut()}
                >
                    <FaLinkedin color= "#303030"/>
                    Logout
                </button>
            </>
        ):(
            <>
                <button className={styles.loginButton}
                    type= "button"
                    onClick= {()=> signIn('linkedin')}
                >
                    <FaLinkedin color= "#303030"/>
                    Login
                </button>
            </>
            
        );
} 