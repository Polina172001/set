export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(person) {
    if (this.members.has(person)) {
      throw new Error('Игрок существует');
    } else {
      this.members.add(person);
    }
  }

  addAll([...persons]) {
    persons.forEach((p) => {
      if (this.members.has(p)) {
        throw new Error('Игрок существует');
      } else {
        this.members.add(p);
      }
    });
  }

  toArray() {
    return Array.from(this.members);
  }
}
