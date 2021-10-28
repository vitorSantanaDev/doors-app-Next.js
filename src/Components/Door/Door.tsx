import { Interface } from "readline";
import DoorModel from "../../model/door";
import { AreaDoor, DoorElement, FloorDiv, FrameDoor } from "./styled";

interface DoorProps {
  value: DoorModel;
  onChange: (newDoor: DoorModel) => void;
}

export default function Door(props: DoorProps) {
  const door = props.value;
  const selectedDoor = door.selected && !door.doorOpen? "selected" : "";
  const toggleSelection = (event) => props.onChange(door.toggleSelection());

  const open = (event) => {
    event.stopPropagation();
    return props.onChange(door.open());
  };

  const renserDoor = () => {
    return (
      <DoorElement>
        <div className="number">{door.number}</div>
        <div className="doorknob" onClick={open}></div>
      </DoorElement>
    );
  };

  return (
    <AreaDoor onClick={toggleSelection}>
      <FrameDoor className={`${"frame"} ${selectedDoor}`}>
        {door.doorOpen ? false : renserDoor()}
      </FrameDoor>
      <FloorDiv></FloorDiv>
    </AreaDoor>
  );
}
