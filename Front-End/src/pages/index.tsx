import { Main } from "./../components/Main";
import { Objectives } from "./../components/Objectives"

export default function Home(): JSX.Element {
  return (
    <div className="pageContent">
      <Main />
      <Objectives />
    </div>
  );
}
