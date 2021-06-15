import styles from "./home.module.scss";

export default function Home(): JSX.Element {
  return (
    <>
      <img src="/images/background.png" className={styles.background_image} />
    </>
  );
}
