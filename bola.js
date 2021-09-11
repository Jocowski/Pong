let SOM_RAQUETADA = new Audio();
SOM_RAQUETADA.src = "snd/raquetada.mp3";
SOM_RAQUETADA.volume = 1;
SOM_RAQUETADA.load();

function Bola(context) {

    this.context = context;

    this.x = 0;
    this.y = 0;
    this.velocidadeX = 0;
    this.velocidadeY = 0;
    this.raio = 12;
    this.cor = "white";

}

Bola.prototype = {

    atualizar: function() {

        if ((this.x < this.raio) || (this.x > this.context.canvas.width - this.raio)) {

            this.velocidadeX *= -1;

        }
          
        if ((this.y < this.raio) || (this.y > this.context.canvas.height - this.raio)) {
            
            this.velocidadeY *= -1;

        }

        let incrementoX = this.velocidadeX * this.animacao.decorrido / 1000;
        let incrementoY = this.velocidadeY * this.animacao.decorrido / 1000;

        this.x += incrementoX;
        this.y += incrementoY;

    },

    desenhar: function() {

        this.context.save();

        this.context.fillStyle = this.cor;
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.raio, 0, 2 * Math.PI, false);
        this.context.fill();

        this.context.restore();

    },

    retangulosColisao: function() {

        return [
            
            {

            x: this.x - this.raio,
            y: this.y - this.raio,
            largura: this.raio * 2,
            altura: this.raio * 2

            }
        
        ];

    },
    
    colidiuCom: function(sprite) {

        if ((sprite instanceof Player) || (sprite instanceof Computador)) {

            this.velocidadeX *= -1;
            SOM_RAQUETADA.play();

        }

    },

    posicionar: function() {

        this.x = context.canvas.width / 2;
        this.y = context.canvas.height / 2;

    }

}