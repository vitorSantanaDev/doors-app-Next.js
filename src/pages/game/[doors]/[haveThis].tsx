import { useEffect, useState } from "react";
import Door from "../../../Components/Door/Door"
import { createDoors, updatePorts } from "../../../functions/doors";
import { GameSection } from "../../../Components/Game/styled";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Game() {
  
  const router = useRouter()

  const [doors, setDoors] = useState([]);

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
      <div className="doors">{renderDoors()}</div>
      <div className="buttons">
          <button><Link href="/">Back</Link></button>
      </div>
    </GameSection>
  );
}
