import { AreaDoor, DoorElement, FloorDiv, FrameDoor } from "./styled";

export default function Door(props) {
  return (
    <AreaDoor>
      <div className="frame selected">
        <DoorElement>
          <div className="number">3</div>
          <div className="doorknob"></div>
        </DoorElement>
      </div>
      <FloorDiv></FloorDiv>
    </AreaDoor>
  );
}
