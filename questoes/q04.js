const faturamentoMensalDist = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,

    porcentagemEstado: function(){
       const Total = this.SP + this.RJ + this.MG + this.ES + this.Outros;

       for (const estado in this) {
            if (typeof this[estado] === 'number') {
                const porcentagem = (this[estado] / Total) * 100;
                console.log(`${estado}: ${porcentagem.toFixed(2)}%`);
            }
       }
    },
};

faturamentoMensalDist.porcentagemEstado()

