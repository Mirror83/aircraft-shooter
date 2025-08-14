namespace SpriteKind {
    export const PlayerLaser = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 100, 0)
    projectile.setKind(SpriteKind.PlayerLaser)
    animation.runImageAnimation(
    projectile,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 2 2 2 2 . . . 
        . . . . . . . 2 2 1 1 1 1 2 . . 
        . . . . 2 2 3 3 1 1 1 1 1 1 . . 
        . . 3 3 3 3 1 1 1 1 1 1 1 1 . . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 3 3 2 2 3 1 1 1 1 1 1 1 . . 
        . . . . . . 2 2 3 1 1 1 1 2 . . 
        . . . . . . . . . 2 2 2 2 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 1 3 . . . . . . 
        . . . . . . 1 3 . 3 3 . . . . . 
        . . . . . . 1 . . . 3 2 2 3 . . 
        . . . . . 1 3 . . . 2 2 1 3 3 . 
        . . . . . 1 3 . 2 2 3 1 1 1 3 . 
        . . 2 2 2 1 3 3 3 3 3 1 1 1 3 . 
        . . 1 1 1 1 3 1 1 1 1 1 1 1 3 . 
        . . 2 2 2 1 3 3 3 3 3 1 1 1 3 . 
        . . . . . 1 3 . 2 2 3 1 1 1 3 . 
        . . . . . 1 3 . . . 2 2 1 3 3 . 
        . . . . . . 1 . . . 3 2 2 3 . . 
        . . . . . . 1 3 . 3 3 . . . . . 
        . . . . . . . 1 1 3 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . 3 3 . . . 3 . . . . . 
        . . . . 3 3 . . . . 3 3 . . . . 
        . . . . 3 . . . . . . 3 3 . . . 
        . . . . . . . . . . . . 3 . . . 
        . . . . . . . . . . . . . . . . 
        . . 3 . . . . . . . . . . . . . 
        . . 3 . . . . . . . . . . 3 . . 
        . . 3 . . . . . . . . . . 3 . . 
        . . . . . . . . . . . . . 3 . . 
        . . . . . . . . . . . . . . . . 
        . . . 3 . . . . . . . . . . . . 
        . . . 3 3 . . . . . . 3 . . . . 
        . . . . 3 3 . . . . 3 3 . . . . 
        . . . . . . . . . 3 3 . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
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
mySprite = sprites.create(img`
    ..............ffffff....
    ..fc.........fccc2ff....
    ..f4c.....fffccc2ff.....
    ..f44ccccc22222222cc....
    ..f244ccc222224442b9c...
    ..cf24222222222244999c..
    .ccf2222222222222199b2c.
    fc22cc22222222b1111b222c
    f22ccccccc2222991222222f
    ffffffc222c22222222222f.
    ....ff222244c2222222ff..
    ...cf222244fffffffff....
    ...c222244ffc2f.........
    ...c2222cfffccf.........
    ...ffffffff2cf..........
    ........fff2c...........
    `, SpriteKind.Player)
mySprite.setStayInScreen(true)
controller.moveSprite(mySprite, 0, 100)
animation.runImageAnimation(
mySprite,
[img`
    ..ccc.........ffffff....
    ..f4cc.......fcc22ff....
    ..f44cc...fffccccff.....
    ..f244cccc22224442cc....
    ..f224cc2222222244b9c...
    ..cf2222222222222b999c..
    .c22c222222222b11199b2c.
    f22ccccccc222299111b222c
    fffffcc222c222222222222f
    .....f2222442222222222f.
    ....f222244fc2222222ff..
    ...c222244ffffffffff....
    ...c2222cfffc2f.........
    ...ffffffff2ccf.........
    .......ffff2cf..........
    ........fffff...........
    `,img`
    ..ccc.........ffffff....
    ..f4cc.......fcc22ff....
    ..f44cc...fffccccff.....
    ..f244cccc22224442cc....
    ..f224cc2222222244b9c...
    ..cf222222222222b9999c..
    .c22c222222222911199b2c.
    f22ccccccc22229911b2222c
    fffffcc222c222222222222f
    .....f2224442222222222f.
    ....f222444fc2222222ff..
    ...c222444ffffffffff....
    ...c2222cfffc2f.........
    ...ffffffff2ccf.........
    .......ffff2cf..........
    ........fffff...........
    `,img`
    ..ccc..........ffffff...
    ..f44c.......ffcc22ff...
    ..f244c...fffccccfff....
    ..f2244ccc22224442cc....
    ..cf22cc222222222b99c...
    .c222222222222b111999c..
    f222ccccccc22299111bb2c.
    fffffccc222c22222222222c
    ...ccc22224422222222222f
    ...c222244422222222222f.
    ...c22244cffc2222222ff..
    ....ccccffffcfffffff....
    .......ffff2c2f.........
    .......ffff2ccf.........
    ........ffffff..........
    ........................
    `,img`
    ..ccc.........fffffff...
    ..f4cc.......ffcc22ff...
    ..f44cc...fffccccfff....
    ..f244cccc22224442cc....
    ..f224cc2222222244b9c...
    ..cf2222222222222b999c..
    .c22c222222222b11199b2c.
    f22ccccccc222299111b222c
    fffffcc222c222222222222f
    .....f2222442222222222f.
    ....f222244fc2222222ff..
    ...c222244ffffffffff....
    ...c2222cfffc2f.........
    ...ffffffff2ccf.........
    .......ffff2cf..........
    ........fffff...........
    `,img`
    ..............ffffff....
    ..fc.........fcc22ff....
    ..f4c.....fffccccff.....
    ..f44ccccc22222222cc....
    ..f244ccc222224442b9c...
    ..cf24222222222244999c..
    .ccf2222222222222999b2c.
    fc22cc22222222b1111b222c
    f22ccccccc2222991122222f
    ffffffc222c22222222222f.
    ....ff222244c2222222ff..
    ...cf222244fffffffff....
    ...c222244ffc2f.........
    ...c2222cfffccf.........
    ...ffffffff2cf..........
    ........fff2c...........
    `,img`
    ..............ffffff....
    ..fc.........fccc2ff....
    ..f4c.....fffccc2ff.....
    ..f44ccccc22222222cc....
    ..f244ccc222224442b9c...
    ..cf24222222222244999c..
    .ccf2222222222222199b2c.
    fc22cc22222222b1111b222c
    f22ccccccc2222991222222f
    ffffffc222c22222222222f.
    ....ff222244c2222222ff..
    ...cf222244fffffffff....
    ...c222244ffc2f.........
    ...c2222cfffccf.........
    ...ffffffff2cf..........
    ........fff2c...........
    `],
100,
true
)
mySprite.x = 20
forever(function () {
    projectile2 = sprites.createProjectileFromSide(assets.image`Enemy Plane`, randint(enemySpeedLowerBound, enemySpeedLowerBound * 2), 0)
    projectile2.setKind(SpriteKind.Enemy)
    projectile2.y = randint(15, 115)
    pause(randint(enemySpwanTimeLowerBound, 2000))
})
game.onUpdateInterval(10000, function () {
    enemySpwanTimeLowerBound += -100
    enemySpeedLowerBound += -20
})
