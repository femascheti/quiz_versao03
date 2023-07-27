const listaPerguntas = [
    {
      pergunta: "Em que ano estamos?",
      opcoes: ["2021", "2022", "2032", "2023"],
      resposta: "2023"
    },
    {
      pergunta: "Em que século estamos?",
      opcoes: ["XX", "XXI", "XIX", "XV"],
      resposta: "XXI"
    },
    {
      pergunta: "Em que país nasceu Pelé?",
      opcoes: ["USA", "Canada", "Brasil", "África do Sul"],
      resposta: "Brasil"
    },
  ];
  
  let perguntaAtual = 0;
  let pontos = 0;
  
  const perguntaElement = document.getElementById('pergunta');
  const opcao1Label = document.getElementById('opcao1Label');
  const opcao2Label = document.getElementById('opcao2Label');
  const opcao3Label = document.getElementById('opcao3Label');
  const opcao4Label = document.getElementById('opcao4Label');
  
  function perguntar() {
    if (perguntaAtual < listaPerguntas.length) {
      const perguntaMomento = listaPerguntas[perguntaAtual];
      perguntaElement.textContent = perguntaMomento.pergunta;
      opcao1Label.textContent = perguntaMomento.opcoes[0];
      opcao2Label.textContent = perguntaMomento.opcoes[1];
      opcao3Label.textContent = perguntaMomento.opcoes[2];
      opcao4Label.textContent = perguntaMomento.opcoes[3];
    } else {
      mostrarResultado();
    }
  }
  
  function corrigirResposta() {
    const opcaoSelecionada = document.querySelector('input[name="answer"]:checked');
    if (opcaoSelecionada) {
      const respostaUser = listaPerguntas[perguntaAtual].opcoes[opcaoSelecionada.value];
      const perguntaMomento = listaPerguntas[perguntaAtual];
      if (respostaUser === perguntaMomento.resposta) {
        pontos++;
      }
      perguntaAtual++;
      opcaoSelecionada.checked = false;
      perguntar();
    }
  }
  
  function mostrarResultado() {
    const resultadoDiv = document.getElementById('resultado');
    const pontuacaoDiv = document.getElementById('pontuacao');
    pontuacaoDiv.textContent = `Sua pontuação: ${pontos} de ${listaPerguntas.length} pontos.`;
    resultadoDiv.style.display = 'block';
  }
  
  perguntar();