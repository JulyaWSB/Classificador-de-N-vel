let nomeHeroi = "Thor";
let xp = 10000;

const niveis = [
  { nome: "Ferro", max: 1000 },
  { nome: "Bronze", max: 2000 },
  { nome: "Prata", max: 5000 },
  { nome: "Ouro", max: 7000 },
  { nome: "Platina", max: 8000 },
  { nome: "Ascendente", max: 9000 },
  { nome: "Imortal", max: 10000 },
  { nome: "Radiante", max: Infinity },
];

let nivelHeroi;

for (let i = 0; i < niveis.length; i++) {
  if (xp <= niveis[i].max) {
    nivelHeroi = niveis[i].nome;
    break;
  }
}

console.log(`O nível do seu Herói é ${nivelHeroi}`);
