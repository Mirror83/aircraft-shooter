namespace SpriteKind {
    export const PlayerLaser = SpriteKind.create()
}
let enemyPlane: Sprite = null
scene.setBackgroundImage(assets.image`Empty Space`)
game.splash("Space Shooter", "Press A to start")
let playerPlane = sprites.create(assets.image`Player Plane`, SpriteKind.Player)
playerPlane.setPosition(20, 58)
forever(function () {
    enemyPlane = sprites.createProjectileFromSide(assets.image`Enemy Plane`, -100, 0)
    enemyPlane.y = randint(5, 115)
    // This allows for the plane to be destroyed automatically after it leaves the screen
    enemyPlane.setFlag(SpriteFlag.AutoDestroy, true)
    pause(1000)
})
