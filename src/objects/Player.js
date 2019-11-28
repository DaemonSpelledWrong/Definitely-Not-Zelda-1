export default class Player {
  constructor(props) {
    this.gameContext = props;
    this.player = null;
    this.keyboardArrows = this.gameContext.input.keyboard.createCursorKeys();

    this.init()
  }

  init() {
    this.player = this.gameContext.physics.add.sprite(193, 280, '').setScale(0.65);
    this.player.setCollideWorldBounds(true);
  }

  step() {
    this.movement();
  }

  movement() {
    const {
      left,
      right,
      up,
      down
    } = this.keyboardArrows;

    if (left.isDown && !right.isDown) {
      this.player.setVelocityX(-90);
    } else if (right.isDown && !left.isDown) {
      this.player.setVelocityX(90);
    } else {
      this.player.setVelocityX(0);
    }

    if (up.isDown && !down.isDown) {
      this.player.setVelocityY(-90);
    } else if (down.isDown && !up.isDown) {
      this.player.setVelocityY(90);
    } else {
      this.player.setVelocityY(0);
    }
  }

  getGameObject() {
    return this.player;
  }
}
