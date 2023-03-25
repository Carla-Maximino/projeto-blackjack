

//----------------copia pra voltar pro lugar-----------------\\
//<script defer type="application/javascript" src="nossoJogo.js"></script>
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
   
    function comecoDoJogo() {
      if (confirm("Boas vindas ao jogo de BlackJack!\nQuer iniciar uma nova rodada?") === true) {
          let cartaUser = [comprarCarta(), comprarCarta()]
          let cartaComputador = []
          let cartaComputador1 = comprarCarta()
          let cartaComputador2 = comprarCarta()
          cartaComputador.push(cartaComputador1.texto)
          cartaComputador.push(cartaComputador2.texto)
          let cartasCompradas = 0
          let calculoUser = cartaUser[0].valor + cartaUser[1].valor
          let calculoPc = cartaComputador1.valor + cartaComputador2.valor
  
          let compra = confirm(`Suas cartas são  ${cartaUser[0].texto}   ${cartaUser[1].texto}  \nA carta revelada do computador é  - ${cartaComputador1.texto}\nDeseja comprar mais cartas ?`)
  
          let i = 0
  
          while (compra) {
              let novaCarta = comprarCarta();
              cartaUser.push(novaCarta);
              let resultadoUsuario = []
  
              calculoUser = 0;
              for (let carta of cartaUser) {
                  resultadoUsuario.push(carta.texto);
                  calculoUser += carta.valor
              }
              if (calculoUser > 21) {
                  break;
              }
              compra = `Cartas do Usuário - ${resultadoUsuario.join(" e ")} - total: ${calculoUser}\nCartas do Computador - ${cartaComputador1.texto}\nDeseja comprar mais cartas?`;
              compra = confirm(compra);
          }
  
          if (calculoUser === 2 * 'A') {
              confirm('Fim de jogo')
              console.log('Fim de jogo')

          } else if (calculoUser > 21) {
              confirm(`Suas cartas são  ${cartaUser[0].texto}   ${cartaUser[1].texto}  \nA carta revelada do computador é  - ${cartaComputador1.texto}   ${cartaComputador2.texto} \n Computador ganhou , usuário estourou!`)
              console.log('Computador ganhou , usuário estourou! ')

          } else if (calculoUser > calculoPc) {
            confirm(`Suas cartas são  ${cartaUser[0].texto}   ${cartaUser[1].texto}  \nA carta revelada do computador é  - ${cartaComputador1.texto}   ${cartaComputador2.texto} \n Usuario ganhou!`)
            console.log('Usuário ganhou ! ')

          } else if (calculoUser < calculoPc) {
              confirm('Computador ganhou !')
              console.log('Computador ganhou ! ')
              
          } else if (calculoUser === calculoPc) {
              confirm('EMPATE')
              console.log('EMPATE')
          }
      }
      else {
          alert('O jogo acabou !')
          console.log('O jogo acabou ! ')
      }
  }
  comecoDoJogo()