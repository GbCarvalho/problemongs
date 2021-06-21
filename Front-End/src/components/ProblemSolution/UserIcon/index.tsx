import styles from "./styles.module.scss";
import { FaUser } from "react-icons/fa";
interface UserIconProps {
  name: string;
}

export function UserIcon({ name }: UserIconProps) {
  return (
    <div className={styles.iconeContent}>
      <div className={styles.iconeContainer}>
        <FaUser color="#707070" size="1.5rem" />
      </div>
      <span>{name}</span>
    </div>
  );
}
