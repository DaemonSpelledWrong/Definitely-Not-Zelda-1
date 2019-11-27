import Phaser from 'phaser';

import Player from '../objects/Player';

export default class Overworld extends Phaser.Scene {
  constructor() {
    super({ key: 'OverworldScene' });
    this.player = null;
  }

  init() {}
  preload() {}

  create() {
    const map = this.make.tilemap({ key: 'Overworld' });

    const tileset = map.addTilesetImage('Overworld', 'OverworldTiles');

    map.createStaticLayer('Below Player', tileset, 0, 0);
    map.createStaticLayer('Above Player', tileset, 0, 0);
    const worldLayer = map.createStaticLayer('World', tileset, 0, 0);

    this.player = new Player(this);

    worldLayer.setCollisionBetween(0, 111);
    this.physics.add.collider(this.player.getGameObject(), worldLayer);
  }

  update() {
    this.player.step();
  }
}
