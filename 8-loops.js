console.log(`Trabalhando com loops`)

const lista = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`)

const idadeComprador = 15
const estaAcompanhada = true
const destino = 'Salvador'

if (idadeComprador >= 18 || estaAcompanhada == true) {
  console.log(`Compra realizada, boa viagem!!`)
  console.log(lista)
} else {
  console.log(`Idade invalida!! \nMotivo: menor de idade.`)
}

let contador = 0
let destinoExitse = false

while (contador < 3) {
  if (lista[contador] == destino) {
    destinoExitse = true
    break
  }
  contador += 1
}

console.log(`Destino existe: ${destinoExitse}!`)
