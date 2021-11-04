export default class DoorModel {
  #number: number;
  #containsGift: boolean;
  #selected: boolean;
  #doorOpen: boolean;

  constructor(
    number: number,
    containsGift = false,
    selected = false,
    doorOpen = false
  ) {
    this.#number = number;
    this.#containsGift = containsGift;
    this.#selected = selected;
    this.#doorOpen = doorOpen;
  }

  get number() {
    return this.#number;
  }

  get containsGift() {
    return this.#containsGift;
  }

  get selected() {
    return this.#selected;
  }

  get doorOpen() {
    return this.#doorOpen;
  }

  deselect() {
    const selected = false;
    return new DoorModel(
      this.number,
      this.containsGift,
      selected,
      this.doorOpen
    );
  }

  toggleSelection() {
    const selected = !this.selected;
    return new DoorModel(
      this.number,
      this.containsGift,
      selected,
      this.doorOpen
    );
  }

  open() {
    const open = true;
    return new DoorModel(this.number, this.containsGift, this.selected, open);
  }
}
