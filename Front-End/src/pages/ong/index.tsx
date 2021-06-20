import styles from './styles.module.scss';

export default function ongSobre() {
    return (
        <>
            <div className={styles.cadastroSolutionContainer}>
                <div className={styles.casdatroSolutionContent}>
                    <div className={styles.cadastroHeader}>
                        <h2>Sobre a ONG</h2>
                        <hr />
                    </div>
                    <div className={styles.cadastroBody}>
                        <label htmlFor="nome">Nome da instituição</label>
                        <input type="text" id="nome" />
                        <label htmlFor="descricao">Whatsapp para contato</label>
                        <input type="text" id="whatsapp" />
                        <label htmlFor="descricao">Email para contato</label>
                        <input type="text" id="email" />
                        <label htmlFor="descricao">Descreva a ONG</label>
                        <textarea id="descricao"></textarea>
                    </div>
                    <div className={styles.integrantesHeader}>
                        <div className={styles.integrantesTitleButton}>
                            <h2>Sobre o contactante</h2>
                        </div>
                        <hr />
                    </div>
                    <div className={styles.cadastroBody}>
                        <label htmlFor="contactante">Nome do contactante</label>
                        <input type="text" id="contactante" />
                        <label htmlFor="cargo">Cargo na ONG</label>
                        <input type="text" id="cargo" />
                        <label htmlFor="emailContato">Email para contato</label>
                        <input type="text" id="emailContato" />
                        <label htmlFor="whatsContato">Whatsapp para contato</label>
                        <input type="text" id="whatsContato" className={styles.integrantes} />
                    </div>
                </div>
            </div>
            <div className={styles.enviarCadastroBody}>
                <div className={styles.enviarCadastroContent}>
                    <div className={styles.imageContent}>
                        <img src="/images/atencao.svg" alt="" />
                        <div className={styles.textAtencao}>
                            <p>Importante!</p>
                            <p>Preencha todos os dados</p>
                        </div>
                    </div>
                    <button>Salvar cadastro</button>
                </div>
            </div>
        </>
    );
}