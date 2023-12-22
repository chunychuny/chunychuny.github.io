    var X = 200;
    var Y = 10;

var drawtree = function(X,Y) {
    
    
    noStroke();
    fill(0, 163, 33);
    triangle(X, Y, X - 100, Y + 240,X + 100,Y + 240); 
    fill(66, 48, 48);
    rect(X - 20 ,Y + 240,40,55);
    fill(0, 0, 0);
    ellipse(X - 20,Y + 70,10,10);
    ellipse(X + 20,Y + 70,10,10);
    arc(X,Y + 110,23,40,0,180);
};


drawtree(200,10);
drawtree(300,300);
drawtree(600,900);
drawtree(700,300);
drawtree(300,700);
drawtree(340,500);
drawtree(200,34);
drawtree(30,300);

