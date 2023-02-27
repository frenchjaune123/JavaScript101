let player = {
  age: 99,
  name: 'ABC',
  isActive: true
};

console.log(player);

// calling object variables
console.log(player.name);
console.log(player['name']);

// altering object variables
player.health = 100;
console.log(player);

// deleting object variables
delete player.health;
console.log(player.health);

// outfit 
let player = {
  age: 99,
  name: 'ABC',
  isActive: true,
  outfit: { 
    color: 'blue',
    size: 'M',
    cost: 100,
    isNew: true
  }
}

// accessing color of object
console.log(player.outfit.color);
// changing outfit of the player
player.outfit.size = 'S';