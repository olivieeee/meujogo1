var pc;
var bg;
var tree;

function preload(){

}

function setup(){
createCanvas(windowWidth, windowHeight);

tree=createSprite(200, 200, 600, 300);
}
function draw(){
background(59);
// image(tree, 0, -height * 5, width, height * 6);
drawSprites();
}