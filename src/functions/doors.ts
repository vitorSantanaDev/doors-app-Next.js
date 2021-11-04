import DoorModel from "../model/door";

export function createDoors(qtd: number, doorGithGift: number): DoorModel[] {
  return Array.from({ length: qtd }, (_, i) => {
    const number = i + 1;
    const haveThis = number === doorGithGift;
    return new DoorModel(number, haveThis);
  });
}

export function updatePorts(
  doors: DoorModel[],
  modifiedDoor: DoorModel
): DoorModel[] {
  return doors.map((door) => {
    const modifiedEqual = door.number === modifiedDoor.number;
    if (modifiedEqual) {
      return modifiedDoor;
    } else {
      return modifiedDoor.doorOpen ? door : door.deselect();
    }
  });
}
