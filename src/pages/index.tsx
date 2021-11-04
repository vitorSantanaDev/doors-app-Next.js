import { useState } from "react";
import Door from "../Components/Door/Door";
import { createDoors, updatePorts } from "../functions/doors";
import DoorModel from "../model/door";

export default function Home() {
  console.log(createDoors(3, 2));

  const [doors, setDoors] = useState(createDoors(4, 2));

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

  return <div style={{ display: "flex" }}>{renderDoors()}</div>;
}
