// methods are simply object functions that can be executed
// unlike functions, they are held in objects
let player = {
  health: 100,
  fun: 0,
  eatApple: function () { 
    console.log('eat apple');
    this.health += 10,

    // health needs to be defined with 'this' keyword unless compilation error
    // 'this' keyword uses the context concept
    console.log(this.health); 
  },
  eatCandy: function () { 
    this.health -= 5;
  },
  play: function () { 
    this.play += 10;
  },
  eat: function (food) { 
    if (food == 'apple') {
      this.health += 10;
    } else if (food == 'candy') { 
      this.health -= 5;
      this.fun += 5;
    }
  }
};
 
player.eatApple();
player.play();
player.eatcandy();