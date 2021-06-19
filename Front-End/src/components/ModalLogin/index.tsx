import styles from './styles.module.scss';
import { signIn} from 'next-auth/client'
import { FaGithub, FaLinkedin, FaGoogle } from 'react-icons/fa';

import { LoginBoxOptions } from './LoginBoxOptions';

export function ModalLogin() {
    return (
        <div className={styles.modalContainer}>
            <h1>Log in with</h1>
            <p className={styles.modalDescription}>create a account to start help ongs with they problems</p>
            <div className={styles.modalOptionsLogin}>
                <LoginBoxOptions
                    label = "Google" 
                    media={<FaGoogle size="3.2rem" color="#EA4335" />} 
                    onClick = {()=>{signIn('google')}}
                />  
                <LoginBoxOptions 
                    label = "GitHub"
                    media={<FaGithub size="3.5rem" color="#333333" /> } 
                    onClick = {()=>{signIn('github')}}
                />
                <LoginBoxOptions 
                    label = "LinkedIn"
                    media={ <FaLinkedin size="3.2rem" color="#0E76A8" /> } 
                    onClick = {()=>{signIn('linkedin')}}
                />
            </div>
        </div>
    );
}