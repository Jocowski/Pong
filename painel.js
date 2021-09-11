let SOM_PONTO = new Audio();
SOM_PONTO.src = "snd/ponto.mp3";
SOM_PONTO.volume = 1;
SOM_PONTO.load();

function Painel(context, bola) {

    this.context = context;
    this.bola = bola

    this.pontosPlayer = 0;
    this.pontosComputador = 0;

}

Painel.prototype = {

    atualizar: function() {

        if (this.bola.x <= this.bola.raio) {
    
            this.pontosComputador += 1;
            SOM_PONTO.play();
            
        }
          
        if (this.bola.x >= this.context.canvas.width - this.bola.raio) {
            
            this.pontosPlayer += 1;
            SOM_PONTO.play();
            
        }

    },

    desenhar: function() {

        this.context.save();

        this.context.fillStyle = "white";
        this.context.font = "25px sans-serif";
        this.context.fillText(this.pontosPlayer, this.context.canvas.width / 2 - 100, 30);
        this.context.fillText(this.pontosComputador, this.context.canvas.width / 2 + 100, 30);

        this.context.restore();

    }

}