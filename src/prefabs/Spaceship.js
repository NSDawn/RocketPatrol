// Spaceship prefab
class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);   // add to existing scene
        this.points = pointValue;   // store pointValue
        this.moveSpeed = game.settings.spaceshipSpeed * (1 + 0.25 * (Math.random() - 0.5));         // pixels per frame
        this.live = 0;
    }

    update() {
        // move spaceship left
        this.live += Math.PI/500;
        this.x -= this.moveSpeed;
        this.y = 100 * Math.sin(this.live % 2*Math.PI) + 100
        // wrap around from left edge to right edge
        if(this.x <= 0 - this.width) {
            this.reset();
        }
    }
    // position reset
    reset() {
        this.x = game.config.width;
        this.live = getRandomInt(5000);
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }