import { Interface } from "readline";
import DoorModel from "../../model/door";
import { AreaDoor, DoorElement, FloorDiv, FrameDoor } from "./styled";

interface DoorProps {
  value: DoorModel
  onChange: (newDoor: DoorModel) => void
}

export default function Door(props: DoorProps) {

  const door  = props.value
  const selectedDoor = door.selected ? "selected" : ''
  const toggleSelection = (event) => props.onChange(door.toggleSelection())

  return (
    <AreaDoor onClick={toggleSelection}>
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
