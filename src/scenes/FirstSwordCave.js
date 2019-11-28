import Phaser from 'phaser';
import Player from '../objects/Player';

export default class FirstSwordCave extends Phaser.Scene {
  constructor() {
    super({ key: 'FirstSwordCaveScene' });
    this.player = null;
  }

  init() {};
  preload() {};

  create() {
    this.player = new Player(this);
  }

  update() {
    this.player.step();
  }
}
