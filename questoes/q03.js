/* 
    3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
    • O menor valor de faturamento ocorrido em um dia do mês;
    • O maior valor de faturamento ocorrido em um dia do mês;
    • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

    IMPORTANTE:
    a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
    b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;
*/

const dadosFaturamento = require('./dados.json'); // carrega os valores presentes em dados.json
//console.log(dadosFaturamento); 

// Filtrando os dias com faturamento não nulo
const faturamentoNaoNulo = dadosFaturamento.filter((dia) => dia.valor > 0);

// Calculando a média mensal
const somaFaturamento = faturamentoNaoNulo.reduce((total, dia) => total + dia.valor, 0);
const mediaMensal = somaFaturamento / faturamentoNaoNulo.length;

// Encontrando o menor e o maior valor de faturamento
const menorFaturamento = Math.min(...faturamentoNaoNulo.map((dia) => dia.valor));
const maiorFaturamento = Math.max(...faturamentoNaoNulo.map((dia) => dia.valor));

// Contando os dias com faturamento acima da média
const diasAcimaDaMedia = faturamentoNaoNulo.filter((dia) => dia.valor > mediaMensal).length;

console.log("Menor faturamento:", menorFaturamento);
console.log("Maior faturamento:", maiorFaturamento);
console.log("Dias acima da média:", diasAcimaDaMedia);