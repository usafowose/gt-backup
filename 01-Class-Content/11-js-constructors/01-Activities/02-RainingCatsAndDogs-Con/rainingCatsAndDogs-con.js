// constructor which can be used to create objects with the ".raining", ".noise",
// and ".makenoise" properties
function Animal1(raining, noise) {
  this.raining = raining;
  this.noise = noise;
  this.makeNoise = function() {
    if (this.raining === true) {
      console.log(this.noise);
    }
  };
}

class Animal {
  constructor (raining, noise) {
    this.raining = raining;
    this.noise = noise;
  }

  makeNoise () {
    if (this.raining) console.log(this.noise);
    
  }
}

class Dog extends Animal {
  constructor (raining = false, noise = 'Meow!') {
    super(raining, noise);
  }
}

class Cat extends Animal {
  constructor (raining = true, noise = 'Woof!') {
    super(raining, noise);
  }
}

// sets the variables "dogs" and "cats" to be animal objects and initializes them with raining and noise properties
var dogs = new Dog(true, "Woof!");
var cats = new Cat(false, "Meow!");

// calling dogs and cats makeNoise methods
dogs.makeNoise();
cats.makeNoise();

// if we want, we can change an objects properties after they're created
cats.raining = true;
cats.makeNoise();

var massHysteria = function(dogs, cats) {
  if (dogs.raining === true && cats.raining === true) {
    console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
  }
};

massHysteria(dogs, cats);
