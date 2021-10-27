import { AreaDoor, DoorElement, FloorDiv, FrameDoor } from "./styled";

export default function Door(props) {

  const selectedDoor = props.selected ? "selected" : ''
  return (
    <AreaDoor>
      <FrameDoor className={`${"frame"} ${selectedDoor}`}>
        <DoorElement>
          <div className="number">3</div>
          <div className="doorknob"></div>
        </DoorElement>
      </FrameDoor>
      <FloorDiv></FloorDiv>
    </AreaDoor>
  );
}
