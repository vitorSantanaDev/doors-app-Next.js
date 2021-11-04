import Card from "../Components/Card/Card";
import styles from "../styles/Form.module.css";
import Link from "next/link"

export default function Form() {
  return (
    <div className={styles.formulario}>
      <div>
        <Card bgColor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card></Card>
      </div>
      <div>
        <Card></Card>
        <Card bgColor="#28a085">
          <Link href={`/game/4/2`} passHref>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Card>
      </div>
    </div>
  );
}
