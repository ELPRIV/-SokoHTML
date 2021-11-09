namespace SpriteKind {
    export const box = SpriteKind.create()
    export const win = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.y == 84) {
    	
    } else {
        xset(0)
        yset(-8)
        mySprite.y += -8
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.box, function (sprite, otherSprite) {
    otherSprite.x += x
    otherSprite.y += y
})
function xset (num: number) {
    x = num
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.x == 68) {
    	
    } else {
        xset(-8)
        yset(0)
        mySprite.x += -8
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.x == 140) {
    	
    } else {
        yset(0)
        xset(8)
        mySprite.x += 8
    }
})
function yset (num: number) {
    y = num
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.y == 156) {
    	
    } else {
        xset(0)
        yset(8)
        mySprite.y += 8
    }
})
sprites.onOverlap(SpriteKind.box, SpriteKind.win, function (sprite, otherSprite) {
    game.over(true)
})
let y = 0
let x = 0
let mySprite: Sprite = null
let mySprite3 = sprites.create(assets.image`win`, SpriteKind.win)
let mySprite2 = sprites.create(assets.image`box`, SpriteKind.box)
mySprite = sprites.create(assets.image`man`, SpriteKind.Player)
tiles.setTilemap(tilemap`level3`)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile11`)
mySprite.x += -4
mySprite.y += -4
tiles.setTilemap(tilemap`level2`)
tiles.placeOnRandomTile(mySprite3, assets.tile`myTile11`)
mySprite3.x += -2
mySprite3.y += -2
tiles.setTilemap(tilemap`level5`)
tiles.placeOnRandomTile(mySprite2, assets.tile`myTile11`)
mySprite2.x += -3
mySprite2.y += -2
tiles.setTilemap(tilemap`level6`)
scene.setBackgroundColor(5)
