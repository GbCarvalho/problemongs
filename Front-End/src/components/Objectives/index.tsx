import styles from "./styles.module.scss";
import { Card } from "./Cards";

export function Objectives() {
  return (
    <div className={styles.objectivesContainer}>
      <div className={styles.objectivesTitulo}>
        <h2>Nosso Objetivo</h2>
        <p>
          O nosso objetivo é poder trazer para o mercado criativo problemas de
          ONGs com o objetivo de benefeciá-las, através da solução proposta pela
          comunidade e beneficiar a comunidade adicionando esse case ao seu
          portifólio
        </p>
      </div>
      <div className={styles.cardsContainer}>
        <Card color="#fff" />
        <Card color="#5ECC5B" />
        <Card color="#fff" />
      </div>
    </div>
  );
}
