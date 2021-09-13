export default class Team {
  constructor(...characters) {
    this.characters = characters;
  }

  [Symbol.iterator]() {
    let i = 0;
    const characters = [...this.characters];
    const len = characters.length;
    return {
      next() {
        if (i < len) {
          return {
            done: false,
            value: characters[i++],
          };
        }
        return { done: true };
      },
    };
  }
}
