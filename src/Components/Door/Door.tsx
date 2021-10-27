import { Interface } from "readline";
import DoorModel from "../../model/door";
import { AreaDoor, DoorElement, FloorDiv, FrameDoor } from "./styled";

interface DoorProps {
  door: DoorModel
}

export default function Door(props: DoorProps) {

  const { door } = props
  const selectedDoor = door.selected ? "selected" : ''

  return (
    <AreaDoor>
      <FrameDoor className={`${"frame"} ${selectedDoor}`}>
        <DoorElement>
          <div className="number">{door.number}</div>
          <div className="doorknob"></div>
        </DoorElement>
      </FrameDoor>
      <FloorDiv></FloorDiv>
    </AreaDoor>
  );
}
