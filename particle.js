let MAXHIST = 50;

function Particle(x, y) {

    this.coor = createVector(x, y);

    this.history = [];

    this.update = function () {

        this.coor.x += random(-10, 10);
        this.coor.y += random(-10, 10);
        this.history.push(createVector(this.coor.x, this.coor.y));

        if(this.history.length > MAXHIST){
            this.history.splice(0, 1);
        }
    }

    this.show = function () {
        noStroke();
        fill(255);
        ellipse(this.coor.x, this.coor.y, 20);

        for (var i = 0; i < this.history.length; i++) {
            var pos = this.history[i];
            var hist_len = this.history.length;
            if(israinbow){
                fill(random(255),random(255),random(255));
            }else{
                fill(map(i, 0, hist_len-1, 1, 255));
            }
            ellipse(pos.x, pos.y, i);
        }
    }

}