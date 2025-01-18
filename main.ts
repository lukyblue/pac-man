controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    pacman.ay = 0
    pacman.ax = 0
    pacman.ay += -100
    animation.runImageAnimation(
    pacman,
    assets.animation`pac-man-animation-up`,
    100,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    pacman.ax = 0
    pacman.ay = 0
    pacman.ax += -100
    animation.runImageAnimation(
    pacman,
    assets.animation`pac-man-animation-left`,
    100,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.setTileAt(location, assets.tile`transparency16`)
    tiles.setWallAt(location, false)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    pacman.ay = 0
    pacman.ax = 0
    pacman.ax += 100
    animation.runImageAnimation(
    pacman,
    assets.animation`pac-man-animation1`,
    100,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    pacman.ax = 0
    pacman.ay = 0
    pacman.ay += 100
    animation.runImageAnimation(
    pacman,
    assets.animation`pac-man-animation-down`,
    100,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`postrach_duchu_tilemap`, function (sprite, location) {
    muzu_snist_ducha += 1
    tiles.setTileAt(location, assets.tile`transparency16`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (muzu_snist_ducha == 1) {
        tiles.placeOnTile(otherSprite, tiles.getTileLocation(14, 12))
    } else {
        info.changeLifeBy(-1)
    }
})
let enemy_pole: Sprite[] = []
let pacman: Sprite = null
let muzu_snist_ducha = 0
muzu_snist_ducha = 0
tiles.setCurrentTilemap(tilemap`first room`)
let pocet_jidla = tiles.getTilesByType(sprites.dungeon.collectibleBlueCrystal).length
pacman = sprites.create(assets.image`pac-man`, SpriteKind.Player)
info.setScore(0)
info.setLife(3)
controller.moveSprite(pacman)
scene.cameraFollowSprite(pacman)
tiles.placeOnRandomTile(pacman, sprites.dungeon.collectibleInsignia)
for (let index = 0; index <= 7; index++) {
    enemy_pole.push(sprites.create(assets.image`ghost`, SpriteKind.Enemy))
    tiles.placeOnTile(enemy_pole[index], tiles.getTileLocation(14, 12))
    enemy_pole[index].setFlag(SpriteFlag.BounceOnWall, false)
}
forever(function () {
    if (pocet_jidla == 0) {
        game.gameOver(true)
    }
})
forever(function () {
	
})
forever(function () {
	
})
forever(function () {
	
})
forever(function () {
    enemy_pole[0].x += randint(-3, 3)
    enemy_pole[0].y += randint(-3, 3)
    pause(100)
})
forever(function () {
    enemy_pole[1].x += randint(-3, 3)
    enemy_pole[1].y += randint(-3, 3)
    pause(100)
})
forever(function () {
    enemy_pole[2].x += randint(-3, 3)
    enemy_pole[2].y += randint(-3, 3)
    pause(100)
})
forever(function () {
    enemy_pole[3].x += randint(-3, 3)
    enemy_pole[3].y += randint(-3, 3)
    pause(100)
})
forever(function () {
    enemy_pole[4].x += randint(-3, 3)
    enemy_pole[4].y += randint(-3, 3)
    pause(100)
})
forever(function () {
    enemy_pole[5].x += randint(-3, 3)
    enemy_pole[5].y += randint(-3, 3)
    pause(100)
})
forever(function () {
    enemy_pole[6].x += randint(-3, 3)
    enemy_pole[6].y += randint(-3, 3)
    pause(100)
})
forever(function () {
	
})
forever(function () {
    enemy_pole[7].x += randint(-3, 3)
    enemy_pole[7].y += randint(-3, 3)
    pause(100)
})
