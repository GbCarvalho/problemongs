import styles from './styles.module.scss';

import { BsFillPeopleFill } from 'react-icons/bs';

export function Card(props) {
    function alterarCor() {
        if (props.color === "#fff") {
            return "#5ECC5B";
        }
        return "#fff";
    }

    function corTexto() {
        if (props.color === "#5ECC5B") {
            return "#fff";
        }
    }
    return (
        <div className={styles.cardContainer} style={{ background: props.color, color: corTexto() }}>
            <BsFillPeopleFill size="4rem" color={alterarCor()} />
            <p className={styles.tittleCard}>Connect with our devs</p>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores</p>
        </div>
    );
}