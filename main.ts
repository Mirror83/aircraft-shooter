namespace SpriteKind {
    export const PlayerLaser = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    laser = sprites.createProjectileFromSprite(assets.image`Laser`, playerPlane, 200, 0)
    laser.setKind(SpriteKind.PlayerLaser)
    // This allows for the plane to be destroyed automatically after it leaves the screen
    laser.setFlag(SpriteFlag.AutoDestroy, true)
})
sprites.onOverlap(SpriteKind.PlayerLaser, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(sprite)
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite)
})
let enemyPlane: Sprite = null
let laser: Sprite = null
let playerPlane: Sprite = null
scene.setBackgroundImage(assets.image`Empty Space`)
game.splash("Space Shooter", "Press A to start")
scroller.scrollBackgroundWithSpeed(-100, 0)
playerPlane = sprites.create(assets.image`Player Plane`, SpriteKind.Player)
playerPlane.setPosition(20, 58)
controller.moveSprite(playerPlane, 0, 100)
playerPlane.setStayInScreen(true)
info.setLife(2)
forever(function () {
    enemyPlane = sprites.createProjectileFromSide(assets.image`Enemy Plane`, -100, 0)
    enemyPlane.y = randint(5, 115)
    // This allows for the plane to be destroyed automatically after it leaves the screen
    enemyPlane.setFlag(SpriteFlag.AutoDestroy, true)
    enemyPlane.setKind(SpriteKind.Enemy)
    pause(1000)
})
