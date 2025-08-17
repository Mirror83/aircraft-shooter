namespace SpriteKind {
    export const PlayerLaser = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite)
})
let enemyPlane: Sprite = null
scene.setBackgroundImage(assets.image`Empty Space`)
game.splash("Space Shooter", "Press A to start")
let playerPlane = sprites.create(assets.image`Player Plane`, SpriteKind.Player)
playerPlane.setPosition(20, 58)
info.setLife(2)
forever(function () {
    enemyPlane = sprites.createProjectileFromSide(assets.image`Enemy Plane`, -100, 0)
    enemyPlane.y = randint(5, 115)
    // This allows for the plane to be destroyed automatically after it leaves the screen
    enemyPlane.setFlag(SpriteFlag.AutoDestroy, true)
    enemyPlane.setKind(SpriteKind.Enemy)
    pause(1000)
})
