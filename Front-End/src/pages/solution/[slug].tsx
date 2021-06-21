import styles from "./styles.module.scss";
import { IoCloseOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/dist/client/router";

interface User {
  id: string;
  username: string;
  email: string;
}

interface SolutionsProps {
  ongProblemId: string;
  apiURI: string;
}

export default function Solutions({ ongProblemId, apiURI }: SolutionsProps) {
  const router = useRouter();
  const [textoInput, setTextoInput] = useState("");
  const [members, setMembers] = useState([]);
  const [solutionTitle, setSolutionTitle] = useState("");
  const [solutionLink, setSolutionLink] = useState("");
  const [solutionDescription, setSolutionDescription] = useState("");
  const [users, setUsers] = useState([] as User[]);

  async function searchUsersByEmail(email: string): Promise<boolean> {
    try {
      const newUser = await axios.get(`${apiURI}/users/email/${email}`);

      if (!newUser) {
        return false;
      }

      setUsers([...users, newUser.data]);

      return true;
    } catch (err) {
      if (err.response) toast.error(err.response.data.message);
      else toast.error(`Error Criando Projeto`);
      return false;
    }
  }

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
            <input
              type="text"
              id="nome"
              value={solutionTitle}
              onChange={(e) => {
                setSolutionTitle(e.target.value);
              }}
            />
            <label htmlFor="link">Link da solução</label>
            <input
              type="text"
              id="link"
              value={solutionLink}
              onChange={(e) => {
                setSolutionLink(e.target.value);
              }}
            />
            <label htmlFor="descricao">Descrição</label>
            <textarea
              id="descricao"
              value={solutionDescription}
              onChange={(e) => {
                setSolutionDescription(e.target.value);
              }}
            ></textarea>
          </div>

          <div className={styles.integrantesHeader}>
            <div className={styles.integrantesTitleButton}>
              <h2>Integrantes no grupo</h2>
            </div>
            <hr />
          </div>

          <div className={styles.cadastroBody}>
            <label htmlFor="integrates">Email dos integrantes</label>
            <div className={styles.barCadatration}>
              <input
                type="text"
                id="integrates"
                className={styles.integrantes}
                onChange={(e) => {
                  setTextoInput(e.target.value);
                }}
                value={textoInput}
              />
              <button
                onClick={async () => {
                  if (textoInput && members.length < 4) {
                    const user = await searchUsersByEmail(textoInput);
                    if (user === false) {
                      setTextoInput("");
                      return;
                    } else {
                      console.log("socorro");
                      setMembers([...members, textoInput]);
                      setTextoInput("");
                    }
                  }
                }}
              >
                +
              </button>
            </div>
            <div className={styles.equipBox}>
              {members.map((member) => {
                return (
                  <div className={styles.equipMember} key={member}>
                    {member}
                    <IoCloseOutline
                      className={styles.iconeFechar}
                      onClick={() => {
                        members.splice(members.indexOf(member), 1);
                        users.splice(users.indexOf(member), 1);
                        setUsers([...users]);
                        setMembers([...members]);
                      }}
                    />
                  </div>
                );
              })}
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

          <button
            onClick={async () => {
              try {
                const response = await axios.post(`${apiURI}/projects`, {
                  name: solutionTitle,
                  ongProblemId,
                  usersId: users.map((user) => {
                    return user.id;
                  }),
                  description: solutionDescription,
                  github: solutionLink,
                });

                if (response.status === 201) {
                  toast.success("Solução Criada com Sucesso ;)");
                  router.back();
                }
              } catch (err) {
                if (err.response) toast.error(err.response.data.message);
                else toast.error(`Error Criando Projeto`);
              }
            }}
          >
            Salvar cadastro
          </button>
        </div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  return {
    props: { ongProblemId: slug, apiURI: process.env.MY_API_URI },
    revalidate: 100 * 60 * 30, // 30 minutes
  };
};
