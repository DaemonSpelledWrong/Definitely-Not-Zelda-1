import Phaser from 'phaser';

export default class PlayerCamera extends Phaser.Cameras.Scene2D.Camera {
  constructor({ x, y, width, height }) {
    super({ x, y, width, height })
  }
}
