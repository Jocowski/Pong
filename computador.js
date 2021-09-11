function Computador(context, bola, painel) {

    this.context = context;
    this.bola = bola;
    this.painel = painel;

    this.x = 0;
    this.y = 0;
    this.velocidadeMax = 0;
    this.velocidade = 0;
    this.largura = 10;
    this.altura = 90;
    this.cor = "white";

    this.chanceErro = 0;

}

Computador.prototype = {

    atualizar: function() {

        this.velocidade = 10 + Math.floor(Math.random() * (this.velocidadeMax - 10 + 1))

        let incremento = this.velocidade * this.animacao.decorrido / 1000;

        if (this.bola.velocidadeY > 0) {

            this.y += incremento;

        } else if (this.bola.velocidadeY < 0) {

            this.y -= incremento;

        }

    },

    desenhar: function() {

        this.context.save();

        this.context.fillStyle = this.cor;
        this.context.fillRect(this.x, this.y, this.largura, this.altura);

        this.context.restore();

    },

    retangulosColisao: function() {

        return [

            {

                x: this.x,
                y: this.y,
                largura: this.largura,
                altura: this.altura

            }

        ]

    },
    
    colidiuCom: function(sprite) {

    },

    posicionar: function() {

        this.x = this.context.canvas.width - 10 - this.largura;
        this.y = this.context.canvas.height / 2 - this.altura / 2;

    },

}