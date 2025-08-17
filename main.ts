namespace SpriteKind {
    export const PlayerLaser = SpriteKind.create()
}
scene.setBackgroundImage(assets.image`Empty Space`)
game.splash("Space Shooter", "Press A to start")
let playerPlane = sprites.create(assets.image`Player Plane`, SpriteKind.Player)
playerPlane.setPosition(20, 58)
