import styles from './styles.module.scss';
import { IoCloseOutline } from 'react-icons/io5';
import { useEffect, useState } from 'react';

export default function Solutions() {

    const [textoInput, setTextoInput] = useState('');
    const [members, setMembers] = useState([]);

    return (
        <>
            <div className={styles.cadastroSolutionContainer}>
                <div className={styles.casdatroSolutionContent}>

                    <div className={styles.cadastroHeader}>
                        <h2>Sobre a solução</h2>
                        <hr />
                    </div>

                    <div className={styles.cadastroBody}>
                        <label htmlFor="nome">Nome da solução</label>
                        <input type="text" id="nome" />
                        <label htmlFor="descricao">Descrição</label>
                        <textarea id="descricao"></textarea>
                    </div>

                    <div className={styles.integrantesHeader}>
                        <div className={styles.integrantesTitleButton}>
                            <h2>Integrantes no grupo</h2>
                        </div>
                        <hr />
                    </div>

                    <div className={styles.cadastroBody}>
                        <label htmlFor="integrates">Integrantes</label>
                        <div className={styles.barCadatration}>
                            <input type="text" id="integrates" className={styles.integrantes} onChange={(e) => { setTextoInput(e.target.value) }} value={textoInput} />
                            <button onClick={() => {
                                if (textoInput && members.length < 4) {
                                    setMembers([...members, textoInput]);
                                    setTextoInput('');
                                }
                            }}>+</button>
                        </div>
                        <div className={styles.equipBox}>
                            {
                                members.map((member) => {
                                    return (
                                        <div className={styles.equipMember} key={member}>
                                            {member}
                                            <IoCloseOutline className={styles.iconeFechar} onClick={() => {
                                                members.splice(members.indexOf(member), 1);
                                                setMembers([...members]);
                                            }
                                            } />
                                        </div>
                                    );
                                })
                            }
                        </div>

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