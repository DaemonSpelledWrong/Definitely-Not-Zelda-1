import Phaser from 'phaser'

export default {
  type: Phaser.AUTO,
  parent: 'content',
  width: 512,
  height: 352,
  physics: {
    default: 'arcade',
    arcade: { gravity: { y: 0 } }
  },
  pixelArt: true,
  localStorageName: 'phaseres6webpack'
}
