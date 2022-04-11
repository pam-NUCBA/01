//* básicamente, llamamos a algo que esté dentro del objeto, sin preocuparnos realmente qué es lo que está ahí adentro. La complejidad está escondida de nosotros.

//*hace más sencilla la interfaz y reduce el impacto del cambio.

function CassettePlayer(cassette) {
    this.cassette = cassette;

    this.play = function() {
        console.log(`I am playing ${this.cassette}`);
    };

    this.pause = function() {
        console.log(`I am pausing ${this.cassette}`);
    };

    this.stop = function() {
        console.log(`I am stopping ${this.cassette}`);
    };
}

let cassetPlayer = new CassettePlayer("Hip-hop");
cassetPlayer.play(); // I am playing Hip-hop