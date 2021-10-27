export default class Door {
  #number;
  #containsGift;
  #selected;
  #doorOpen;
  constructor(number, containsGift = false, selected = false, doorOpen) {
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
    return this.#selected
  }

  get doorOpen() {
    return this.#doorOpen
  }

  deselect() {
    const selected = false
    return new Door(this.number, this.containsGift, selected, this.doorOpen)
  }

  toggleSelection() {
    const selected = !this.selected
    return new Door(this.number, this.containsGift, selected, this.doorOpen)
  }

  open() {
    const open = true;
    return new Door(this.number, this.containsGift, this.selected, open)
  }

}
