import Card from "../Components/Card/Card";
import styles from "../styles/Form.module.css";
import Link from "next/link";
import NumberInput from "../Components/NumberInput/NumberInput";
import { useState } from "react";

export default function Form() {
  const [numberDoors, setNumberDoors] = useState(3);
  const [giftDoors, setGiftDoors] = useState(1);
  return (
    <div className={styles.formulario}>
      <div>
        <Card bgColor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <NumberInput
            text="Quantidade de portas?"
            value={numberDoors}
            onChange={(newAmount) => setNumberDoors(newAmount)}
          />
        </Card>
      </div>
      <div>
        <Card>
          <NumberInput
            text="Quantidade de portas?"
            value={giftDoors}
            onChange={(newAmount) => setGiftDoors(newAmount)}
          />
        </Card>
        <Card bgColor="#28a085">
          <Link href={`/game/${numberDoors}/${giftDoors}`} passHref>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Card>
      </div>
    </div>
  );
}
