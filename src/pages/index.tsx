import { Main } from "./../components/Main";
import { Objectives } from "./../components/Objectives"
import styles from './home.module.scss';

export default function Home(): JSX.Element {
  return (
    <div className="pageContent">
      <Main />
      <Objectives />
    </div>
  );
}
