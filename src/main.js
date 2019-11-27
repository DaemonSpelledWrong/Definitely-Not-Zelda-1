import Phaser from 'phaser';

import BootScene from './scenes/Boot';
import SplashScene from './scenes/Splash';
import OverworldScene from './scenes/Overworld';
import config from './config';

const gameConfig = Object.assign(config, { scene: [BootScene, SplashScene, OverworldScene] });

class Game extends Phaser.Game {
  constructor () {
    super(gameConfig)
  }
}

window.game = new Game();
