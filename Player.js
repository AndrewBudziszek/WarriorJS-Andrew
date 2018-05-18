class Player {
  playTurn(warrior) {
    // Cool code goes here.
    if (warrior.feel().isUnit()) {
      warrior.attack();
    } else {
      warrior.walk();
    }
  }
}
