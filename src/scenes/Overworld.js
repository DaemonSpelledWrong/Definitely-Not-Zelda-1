import Phaser from 'phaser';

import Player from '../objects/Player';
import PlayerCamera from '../objects/PlayerCamera';

export default class Overworld extends Phaser.Scene {
  constructor() {
    super({ key: 'OverworldScene' });
    this.player = null;
    this.camera = null;
  }

  init() {}
  preload() {}

  create() {
    const map = this.make.tilemap({ key: 'Overworld' });
    const tileset = map.addTilesetImage('Overworld', 'OverworldTiles');

    map.createStaticLayer('Below Player', tileset, 0, 0);
    const worldLayer = map.createDynamicLayer('World', tileset, 0, 0);
    map.createStaticLayer('Above Player', tileset, 0, 0);

    this.camera = new PlayerCamera(0, 0, 512, 352);
    this.player = new Player(this);

    const door = this.add.tileSprite(210, 80, 25, 25, tileset[46]);
    this.physics.add.existing(door, true);
    this.physics.add.existing(this.player.getGameObject(), false);

    worldLayer.setCollisionBetween(0, 459);

    this.physics.add.collider(this.player.getGameObject(), worldLayer);
    this.physics.add.overlap(this.player.getGameObject(), door, () => {
      this.scene.start('FirstSwordCaveScene');
    });

    console.log(Object.getPrototypeOf(worldLayer));
  }

  update() {
    this.player.step();
  }
}
