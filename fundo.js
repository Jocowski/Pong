function Fundo(context) {

    this.context = context;

    this.cor = "black";

    this.corLinha = "white";
    this.larguraLinha = 4;

}

Fundo.prototype = {

    atualizar: function() {

    },

    desenhar: function() {

        this.context.fillStyle = this.cor;
        this.context.fillRect(0, 0, this.context.canvas.width, this.context.canvas.height);

        this.context.fillStyle = this.corLinha;
        this.context.fillRect(this.context.canvas.width / 2 - this.larguraLinha / 2, 0, this.larguraLinha, this.context.canvas.height);

    }

}