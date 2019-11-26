import Phaser from 'phaser';

export default class Overworld extends Phaser.Scene {
  constructor() {
    super({ key: 'OverworldScene' });
  }

  init() {}
  preload() {}

  create() {
    const map = this.make.tilemap({ key: 'Overworld' });

    const tileset = map.addTilesetImage('Overworld', 'OverworldTiles');

    map.createStaticLayer('Below Player', tileset, 0, 0);
    map.createStaticLayer('Above Player', tileset, 0, 0);
    const worldLayer = map.createStaticLayer('World', tileset, 0, 0);

    worldLayer.setCollisionBetween(0, 111);
  }
}
