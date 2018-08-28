let MAXHIST = 100;


function Particle(x, y) {

    this.count = 0;

    this.coor = createVector(x, y);

    this.history = [];

    this.update = function () {
        this.count += random()/15;

        // this.coor.x += random(-5, 10);
        this.coor.x += noise(this.count)*10-5;
        this.coor.y += noise(this.count+100)*10-5;

        this.history.push(createVector(this.coor.x, this.coor.y));

        // for (var i = 0; i < this.history.length; i++) {
        //     var pos = this.history[i];
        //     pos.x += random(-2,2);
        //     pos.y += random(-2,2);
        // }
        
        if(this.history.length > MAXHIST){
            this.history.splice(0, 1);
        }
    }

    this.show = function () {
        noStroke();
        // strokeWeight(2);
        // stroke(255);
        // noFill();
        fill(255);
        ellipse(this.coor.x, this.coor.y, 20);

        // beginShape();
        for (var i = 0; i < this.history.length; i++) {
            var pos = this.history[i];
            var hist_len = this.history.length;
            if(israinbow){
                fill(random(255),random(255),random(255));
            }else{
                fill(map(i, 0, hist_len-1, 1, 255));
            }
            ellipse(pos.x, pos.y, i/10);
        //     vertex(pos.x, pos.y);
        // endShape();
        }
    }

}