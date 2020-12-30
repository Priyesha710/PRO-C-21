var bu1, bu2, bu3, bu4, w1, w2, w3, w4;
var lane1;
function preload() {

}
function setup() {
    createCanvas(1600, 400);
    bu1 = createSprite(10, 50, 5, 5);
    bu1.speed = Math.round(random(223, 321));
    bu1.velocityX = 20;
    bu1.weight = Math.round(random(30, 52));
    bu1.shapeColor = "brown";

    lane1 = createSprite(695, 100, 1390, 10);
    lane1.shapeColor = "blue";
    bu2 = createSprite(10, 150, 5, 5);
    bu2.speed = Math.round(random(223, 321));
    bu2.velocityX = 20;
    bu2.weight = Math.round(random(30, 52));
    bu2.shapeColor = "brown";

    lane1 = createSprite(695, 200, 1390, 10);
    lane1.shapeColor = "blue";
    bu3 = createSprite(10, 250, 5, 5);
    bu3.speed = Math.round(random(223, 321));
    bu3.velocityX = 20;
    bu3.weight = Math.round(random(30, 52));
    bu3.shapeColor = "brown";

    lane1 = createSprite(695, 300, 1390, 10);
    bu4 = createSprite(10, 350, 5, 5);
    bu4.speed = Math.round(random(223, 321));
    bu4.velocityX = 20;
    bu4.weight = Math.round(random(30, 52));
    bu4.shapeColor = "brown";
    
    w1 = createSprite(1400, 80, 12, 60);
    w1.shapeColor = "black";
    
    w2 = createSprite(1400, 160, 10, 60);
    w2.shapeColor = "black";
   
    w3 = createSprite(1400, 240, 10, 60);
    w3.shapeColor = "black";
   
    w4 = createSprite(1400, 320, 10, 60);
    w4.shapeColor = "black";
    
    w2.thickness = Math.round(random(22,83));
    w1.thickness = Math.round(random(22,83));
    w3.thickness = Math.round(random(22,83));
    w4.thickness = Math.round(random(22,83));

    w1.width = w1.thickness/5;
    w2.width = w2.thickness/5;
    w3.width = w3.thickness/5;
    w4.width = w4.thickness/5; 
    
    lane1.shapeColor = "blue";
}

function draw() {
    background("lightgreen");
    textSize(40);
    fill("orange");
    textFont("impact");
    text("Simulator for checking damage in walls.", 400, 30);
    textFont("courier");
    stroke(20);
    if (w1.x - bu1.x <= bu1.width / 2 + w1.width / 2) {
        bu1.velocityX = 0;
        fill("black");
        textSize(20);
        damage(bu1,w1);
        text("damage: " + Math.round(w1.damage), bu1.x + 70, bu1.y - 20);
        if (w1.damage > 10) {
            w1.shapeColor = "red";
        } else
            if (w1.damage < 10 && w1.damage > 5) {
                w1.shapeColor = "yellow";
            } else
                if (w1.damage < 5) {
                    w1.shapeColor = "green";
                }
    }
    if (w2.x - bu2.x <= bu2.width / 2 + w2.width / 2) {
        bu2.velocityX = 0;
        damage(bu2,w2);
        text("damage: " + Math.round(w2.damage), bu2.x + 70, bu2.y - 20);
        if (w2.damage > 10) {
            w2.shapeColor = "red";
        } else if (w2.damage < 10 && w2.damage > 5) {
            w2.shapeColor = "yellow";
        } else if (w2.damage < 5) {
            w2.shapeColor = "green";
        }
    }
    if (w3.x - bu3.x <= bu3.width / 2 + w3.width / 2) {
        bu3.velocityX = 0;
        damage(bu3,w3);
        text("damage: " + Math.round(w3.damage), bu3.x + 70, bu3.y - 20);
        if (w3.damage > 10) {
            w3.shapeColor = "red";
        } else if (w3.damage < 10 && w3.damage > 5) {
            w3.shapeColor = "yellow";
        } else if (w3.damage < 5) {
            w3.shapeColor = "green";
        }
    }
    if (w4.x - bu4.x <= bu4.width / 2 + w4.width / 2) {
        bu4.velocityX = 0;
        damage(bu4,w4);
        text("damage: " + Math.round(w4.damage), bu4.x + 70, bu4.y - 20);
        if (w4.damage > 10) {
            w4.shapeColor = "red";
        } else if (5 < w4.damage < 10) {
            w4.shapeColor = "yellow";
        } else {
            w4.shapeColor = "green";
        }
    }

    drawSprites();
}
function damage(obj1, obj2) {
    var damage = (0.5 * obj1.weight * obj1.speed * obj1.speed) / (obj2.thickness * obj2.thickness * obj2.thickness);
    obj2.damage = damage;
    return damage;

}
