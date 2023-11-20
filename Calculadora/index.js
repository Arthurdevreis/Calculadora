function calcularNivelRankeado(vitorias,derrotas) {
//Calcular o saldo de ranqueadas

let saldoVitorias = vitorias - derrotas;

//determinar o nivel com base no saldo de vitórias
let nivel;

if (vitorias < 10) {
  nivel = "Ferro";
  }

else if (vitorias <= 20) {
  nivel = "Bronze";
  }

else if (vitorias <= 50) {
  nivel = "prata";
  }

else if (vitorias <= 80) {
  nivel = "Ouro";
  }

else if (vitorias <= 90) {
  nivel = "Diamante";
  }

else if (vitorias <= 100) {
  nivel = "Lendário";
  }

else {
  nivel = "Imortal";
  }

// Retornar o resultado como objeto
return {
  saldoVitorias: saldoVitorias,
  nivel: nivel
  };

}

// Exemplo de uso da função
function exibirMensagem() {
  let resultadoArthur = calcularNivelRankeado(70, 20);
  console.log(`O Herói Arthur tem um saldo de ${resultadoArthur.saldoVitorias} e está no nível de ${resultadoArthur.nivel}`);
}

// Chamando a função
exibirMensagem();