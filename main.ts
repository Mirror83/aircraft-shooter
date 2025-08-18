namespace SpriteKind {
    export const PlayerLaser = SpriteKind.create()
    export const Time = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.PlayerLaser, SpriteKind.Time, function (sprite, otherSprite) {
    music.play(music.createSoundEffect(WaveShape.Noise, 2827, 742, 255, 0, 500, SoundExpressionEffect.Warble, InterpolationCurve.Logarithmic), music.PlaybackMode.InBackground)
    mySprite.sayText("+0s", 1000, true)
    sprites.destroy(sprite)
    sprites.destroy(otherSprite, effects.ashes, 25)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
    projectile = sprites.createProjectileFromSprite(assets.image`Laser`, mySprite, 200, 0)
    projectile.setKind(SpriteKind.PlayerLaser)
    animation.runImageAnimation(
    projectile,
    assets.animation`Laser Animation`,
    50,
    true
    )
})
// Increase the time
sprites.onOverlap(SpriteKind.Player, SpriteKind.Time, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.InBackground)
    timeIncrement = randint(1, 3)
    info.changeCountdownBy(timeIncrement)
    sprite.sayText("+" + timeIncrement + "s", 1000, true)
    sprites.destroy(otherSprite)
    effects.confetti.startScreenEffect(500)
})
sprites.onOverlap(SpriteKind.PlayerLaser, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.play(music.createSoundEffect(WaveShape.Triangle, 390, 412, 255, 0, 200, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
    sprites.destroy(sprite)
    sprites.destroy(otherSprite, effects.ashes, 25)
    info.changeScoreBy(1)
})
info.onLifeZero(function () {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(-1)
    scene.cameraShake(4, 500)
})
let time: Sprite = null
let projectile2: Sprite = null
let timeIncrement = 0
let projectile: Sprite = null
let mySprite: Sprite = null
info.setLife(1)
let enemySpwanTimeLowerBound = 500
let enemySpawnTimeUpperBound = 2000
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
info.startCountdown(20)
game.onUpdateInterval(2500, function () {
    enemySpwanTimeLowerBound += -50
    enemySpawnTimeUpperBound += -50
    enemySpeedLowerBound += -10
})
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
    pause(randint(enemySpwanTimeLowerBound, enemySpawnTimeUpperBound))
})
forever(function () {
    time = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 1 1 1 1 1 1 . . . . 
        . . . . 1 . . . e . . . 1 . . . 
        . . . 1 . . . . . . . . . 1 . . 
        . . 1 . . . . . d . . . . . 1 . 
        . . 1 . . . . . d . . . . . 1 . 
        . . 1 . . . . . d . . . . . 1 . 
        . . 1 e . . . . d d d d . e 1 . 
        . . 1 . . . . . . . . . . . 1 . 
        . . 1 . . . . . . . . . . . 1 . 
        . . 1 . . . . . . . . . . . 1 . 
        . . . 1 . . . . . . . . . 1 . . 
        . . . . 1 . . . e . . . 1 . . . 
        . . . . . 1 1 1 1 1 1 1 . . . . 
        . . . . . . . . . . . . . . . . 
        `, randint(-250, -150), 0)
    time.setKind(SpriteKind.Time)
    time.y = randint(15, 115)
    pause(5000)
})
