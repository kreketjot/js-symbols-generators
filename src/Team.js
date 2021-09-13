export default class Team {
  constructor(...characters) {
    this.characters = characters;
  }

  * [Symbol.iterator]() {
    for (const person of this.characters) {
      yield person;
    }
    // this.characters.forEach((person) => { yield person; });
  }
}
