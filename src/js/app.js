// TODO: write your code here
import Character, {
  Bowerman, Swordsman, Magician, Undead, Zombie, Daemon,
} from './characterClasses';

const user = new Character('Willie');
const sword = new Swordsman('Bill');
const mag = new Magician('Dambldor');
const undead = new Undead('Pshink');
const zombie = new Zombie('Paspartu');
const daemon = new Daemon('Arsharh');
const bow = new Bowerman('John');

console.log(`Character is ${user.level}`);
user.levelUp();
for (const prop in user) {
  if (Object.prototype.hasOwnProperty.call(user, prop)) {
    const item = user[prop];
    console.log(`User ${prop} is ${item}`);
  }
}

bow.levelUp();

for (const prop in bow) {
  if (Object.prototype.hasOwnProperty.call(bow, prop)) {
    const item = bow[prop];
    console.log(`Bowerman ${prop} is ${item}`);
  }
}

for (const prop in mag) {
  if (Object.prototype.hasOwnProperty.call(mag, prop)) {
    const item = mag[prop];
    console.log(`Magician ${prop} is ${item}`);
  }
}

for (const prop in sword) {
  if (Object.prototype.hasOwnProperty.call(sword, prop)) {
    const item = sword[prop];
    console.log(`Swordsman ${prop} is ${item}`);
  }
}

for (const prop in undead) {
  if (Object.prototype.hasOwnProperty.call(undead, prop)) {
    const item = undead[prop];
    console.log(`Undead ${prop} is ${item}`);
  }
}

for (const prop in zombie) {
  if (Object.prototype.hasOwnProperty.call(zombie, prop)) {
    const item = zombie[prop];
    console.log(`Zombie ${prop} is ${item}`);
  }
}

for (const prop in daemon) {
  if (Object.prototype.hasOwnProperty.call(daemon, prop)) {
    const item = daemon[prop];
    console.log(`Daemon ${prop} is ${item}`);
  }
}
