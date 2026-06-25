document.getElementById('quiz-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let pontuacaoTotal = 0;
    const totalPerguntas = 5;

    // Soma os valores das respostas selecionadas
    for (let i = 1; i <= totalPerguntas; i++) {
        const elemento = document.querySelector(`input[name="p${i}"]:checked`);
        if (elemento) {
            pontuacaoTotal += parseInt(elemento.value);
        }
    }

    // Define faixas de resultado (Mínimo: 5 pontos | Máximo: 25 pontos)
    let perfil = "";
    let diagnostico = "";
    const diagPainel = document.getElementById('diagnostico-texto');
    
    diagPainel.className = "diagnostico-texto";

    if (pontuacaoTotal <= 12) {
        perfil = "Necessita Atenção";
        diagPainel.classList.add("atencao");
        diagnostico = "Sua pontuação sugere que estratégias de autogestão mental e pausas conscientes podem ajudar a reduzir a sobrecarga no momento.";
    } else if (pontuacaoTotal > 12 && pontuacaoTotal <= 19) {
        perfil = "Em Equilíbrio";
        diagnostico = "Você apresenta uma boa estabilidade emocional e reflexiva, lidando de forma saudável com os desafios do cotidiano.";
    } else {
        perfil = "Excelente";
        diagnostico = "Ótimo nível de inteligência emocional! Você demonstra alta capacidade de leitura interna e foco sob demandas intensas.";
    }

    // Renderiza na tela
    document.getElementById('score-text').innerText = `${pontuacaoTotal} / 25`;
    document.getElementById('perfil-badge').innerText = perfil;
    diagPainel.innerHTML = diagnostico;

    // Mostra o painel oculto e rola a página de forma suave
    const painel = document.getElementById('resultado-painel');
    painel.style.display = 'block';
    painel.scrollIntoView({ behavior: 'smooth' });
});
