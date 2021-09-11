function Player(context, teclado) {

    this.context = context;
    this.teclado = teclado;

    this.x = 0;
    this.y = 0;
    this.velocidade = 0;
    this.largura = 10;
    this.altura = 90;
    this.cor = "white";

}

Player.prototype = {

    atualizar: function() {

        let incremento = this.velocidade * this.animacao.decorrido / 1000;

        if ((this.teclado.pressionada(SETA_CIMA)) && (this.y > 0)) {

            this.y -= incremento;

        }

        if ((this.teclado.pressionada(SETA_BAIXO)) && (this.y < this.context.canvas.height - this.altura)) {

            this.y += incremento;

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

        this.x = 10;
        this.y = this.context.canvas.height / 2 - this.altura / 2;

    }

}