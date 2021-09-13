import Person from './Person';
import Team from './Team';

const archer = new Person('Лучник', 'Bowman', 50, 1, 40, 10);
const mage = new Person('Маг', 'Undead', 60, 1, 20, 40);
const team = new Team(archer, mage);
console.log(team);
console.log(...team);
for (const person of team) {
  const p = document.createElement('p');
  p.innerText = person;
  document.body.append(p);
}
