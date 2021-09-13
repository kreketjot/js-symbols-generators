export default class Person {
  constructor(name, type, health, level, attack, defence) {
    this.name = name;
    this.type = type;
    this.maxHealth = health;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }

  toString() {
    return `${this.name} (${this.type})
      lvl: ${this.level}
      hp: ${this.health}/${this.maxHealth}
      atk/def: ${this.attack}/${this.defence}
    `;
  }
}
