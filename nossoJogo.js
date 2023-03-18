

/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    console.log(`"Boas vindas ao jogo de BlackJack!".`)
   
   if(confirm("Quer iniciar uma nova rodada?") === true){
      
      let usuarioCarta1 = comprarCarta()
      let usuarioCarta2 = comprarCarta()
      let computadorCarta1 = comprarCarta()
      let computadorCarta2 = comprarCarta()
      let somaCartaUsuario = usuarioCarta1.valor + usuarioCarta2.valor
      let somaCartaComputador = computadorCarta1.valor + computadorCarta2.valor

      console.log(`Carta Usuario - ${usuarioCarta1.texto} ${usuarioCarta2.texto} - ${somaCartaUsuario}`)
      console.log(`Carta Computador - ${computadorCarta1.texto} ${computadorCarta2.texto} - ${somaCartaComputador}`)

      if (somaCartaUsuario > somaCartaComputador){
         console.log(`Usuario ganhou!!`)
      }else if(somaCartaComputador > somaCartaUsuario){
         console.log(`Computador ganhou!!`)
      }else if(somaCartaUsuario === somaCartaComputador){
         console.log(`Empate!`)
      }
      

   } else {
      console.log(`O jogo acabou!!`)
   }



