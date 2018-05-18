class Player {
  playTurn(warrior) {
    // Cool code goes here.
    if (warrior.health() < this.health) {
      //Being attacked
      if (warrior.feel().isUnit()) {
        warrior.attack()
      } else {
        warrior.walk()
      }
    } else if (warrior.health() < 16) {
      if (warrior.feel().isUnit()) {
        warrior.walk('backward');
      } else {
        warrior.rest();
      }
    } else if (warrior.feel().isUnit()) {
      warrior.attack();
    } else {
      warrior.walk();
    }
    this.health = warrior.health()
  }
}
