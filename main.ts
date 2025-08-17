namespace SpriteKind {
    export const PlayerLaser = SpriteKind.create()
}
let enemyPlane: Sprite = null
scene.setBackgroundImage(assets.image`Empty Space`)
game.splash("Space Shooter", "Press A to start")
let playerPlane = sprites.create(assets.image`Player Plane`, SpriteKind.Player)
playerPlane.setPosition(20, 58)
controller.moveSprite(playerPlane, 0, 70)
forever(function () {
    enemyPlane = sprites.createProjectileFromSide(assets.image`Enemy Plane`, -50, 0)
    enemyPlane.y = randint(5, 115)
    pause(1000)
})
