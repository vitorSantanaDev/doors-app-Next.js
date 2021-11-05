import { useEffect, useState } from "react";
import Door from "../../../Components/Door/Door"
import { createDoors, updatePorts } from "../../../functions/doors";
import { GameSection } from "../../../Components/Game/styled";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Game() {
  
  const router = useRouter()
  const [doors, setDoors] = useState([]);
  const [valid, setValid] = useState(false);

  useEffect(() => {
    const doors = Number(router.query.doors)
    const haveThis = Number(router.query.haveThis)
    const doorsvalid = doors >= 3 && doors <= 100
    const haveThisValid = haveThis >= 1 && haveThis <= doors
    setValid(doorsvalid && haveThisValid)
  }, [doors, router.query.doors, router.query.haveThis])

  useEffect(() => {
    const doors = Number(router.query.doors)
    const haveThis = Number(router.query.haveThis)
    setDoors(createDoors(doors, haveThis))
  }, [router?.query])

  function renderDoors() {
    return doors.map((door) => {
      return (
        <Door
          value={door}
          key={door.number}
          onChange={(newDoor) => setDoors(updatePorts(doors, newDoor))}
        />
      );
    });
  }

  return (
    <GameSection>
      <div className="doors">
        {valid ? renderDoors() : <h1>Valores inválidos</h1>}
        </div>
      <div className="buttons">
          <button><Link href="/">Back</Link></button>
      </div>
    </GameSection>
  );
}
