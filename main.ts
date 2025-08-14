namespace SpriteKind {
    export const PlayerLaser = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`Laser`, mySprite, 100, 0)
    projectile.setKind(SpriteKind.PlayerLaser)
    animation.runImageAnimation(
    projectile,
    assets.animation`Lazer Animation`,
    50,
    true
    )
})
sprites.onOverlap(SpriteKind.PlayerLaser, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    sprites.destroy(otherSprite, effects.ashes, 25)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(-1)
    scene.cameraShake(4, 500)
})
let projectile2: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
info.setLife(1)
let enemySpwanTimeLowerBound = 500
let enemySpeedLowerBound = -50
scene.setBackgroundImage(assets.image`Empty Space`)
scroller.scrollBackgroundWithSpeed(-50, 0)
game.splash("Space Shooter", "Press A to start")
mySprite = sprites.create(assets.image`Player Plane`, SpriteKind.Player)
mySprite.setStayInScreen(true)
controller.moveSprite(mySprite, 0, 100)
animation.runImageAnimation(
mySprite,
assets.animation`Player Plane Animation`,
80,
true
)
mySprite.x = 20
forever(function () {
    projectile2 = sprites.createProjectileFromSide(assets.image`Enemy Plane`, randint(enemySpeedLowerBound, enemySpeedLowerBound * 2), 0)
    animation.runImageAnimation(
    projectile2,
    assets.animation`Enemy Plane Animation`,
    100,
    true
    )
    projectile2.setKind(SpriteKind.Enemy)
    projectile2.y = randint(15, 115)
    pause(randint(enemySpwanTimeLowerBound, 2000))
})
game.onUpdateInterval(10000, function () {
    enemySpwanTimeLowerBound += -100
    enemySpeedLowerBound += -20
})
