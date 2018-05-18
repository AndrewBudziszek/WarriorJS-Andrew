class Player {
  playTurn(warrior) {
    // Cool code goes here.
    if (warrior.health() < 12) {
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
  }
}
