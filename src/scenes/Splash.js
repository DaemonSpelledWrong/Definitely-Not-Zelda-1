import Phaser from 'phaser';

export default class extends Phaser.Scene {
  constructor () {
    super({ key: 'SplashScene' })
  }

  preload () {
    this.add.text(100, 100, 'Loading the Game...');
    this.load.image('OverworldTiles', 'assets/images/Asets.png');
    this.load.tilemapTiledJSON('Overworld', 'assets/maps/Initial_map.json');
  }

  create () {
    this.scene.start('OverworldScene');
  }

  update () {}
}
