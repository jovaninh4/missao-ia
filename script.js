const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "ToyStory é um filme de animação da Pixar?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Aparentemente você não conhece a Disney e nem seus clássicos."
            },
            {
                texto: "Não",
                afirmacao: "Aparentemente você conhece a Disney e sabe os clássicos."
            }
        ]
    },
    {
        enunciado: "O Rei Leão conta a história de um jovem leão chamado Simba?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Assim como conhece os classicos de 2D. "
            },
            {
                texto: "Não",
                afirmacao: "Assim como não conhece os classicos de 2D. "
            }
        ]
    },
    {
        enunciado: "Frozen apresenta as aventuras de duas irmãs, Elsa e Diana",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "E também não conhece  os filmes que são um sucesso até hoje. "
            },
            {
                texto: "Não",
                afirmacao: "E também os filmes que são um sucesso até hoje. "
            }
        ]
    },
    {
        enunciado: "Procurando Nemo segue a jornada de um peixe-palhaço chamado Lucas?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Nem os filmes que possuem continuação. "
            },
            {
                texto: "Não",
                afirmacao: "Até os filmes que possuem continuação. "
            }
        ]
    },
    {
        enunciado: "Ratatouille é uma animação que se passa em um restaurante francês?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Inclusive os que se deixam os cabelos em pé."
            },
            {
                texto: "Não",
                afirmacao: "Inclusive nem os que deixam os cabelos em pé."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();