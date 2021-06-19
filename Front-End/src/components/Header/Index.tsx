import Link from "next/link";
import styles from "./styles.module.scss";
import { LoginButton } from "../LoginButton/index";

export function Header() {
  return (
    <div className={styles.menuContainer}>
      <div className={styles.menuContents}>
        <div className={styles.logoContainer}>
          <Link href="/">
            <a>
              <h1>
                PROBLEM<span>ONGS</span>
              </h1>
            </a>
          </Link>
        </div>
        <div className={styles.menuOptions}>
          <p>Sobre</p>
          <p>Contato</p>
          <LoginButton />
        </div>
      </div>
    </div>
  );
}
