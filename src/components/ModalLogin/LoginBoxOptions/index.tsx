import styles from './styles.module.scss';


export function LoginBoxOptions(props) {
    return (
        <button className={styles.loginBoxContainer} onClick = {props.onClick}>
            <div className={styles.loginBoxContent}>
                {props.media}
                <span>{props.label}</span>
            </div>
        </button>
    );
}