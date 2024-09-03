const form = document.getElementById("iform");
const imgAprovado = `<img src="./images/aprovado.png" alt="Emoji Celebrando" />`;
const imgReprovado = `<img src="./images/reprovado.png" alt="Emoji Decepcionado" />`;
const atividades = [];
const notas = [];
const spanAprovado = `<span class="resultadoAprovado">Aprovado!</span>`;
const spanReprovado = `<span class="resultadoReprovado">Reprovado!</span>`;
const notaMinima =  parseFloat(prompt("Digite a nota mínima:"))

let linhas = "";

form.addEventListener("submit", function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionaLinha(){
    const inputNomeAtividade = document.getElementById('inomeDaAtividade');
    const inputNotaAtividade = document.getElementById('inota');
    const nota = parseFloat(inputNotaAtividade.value);

    if (atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade: ${inputNomeAtividade.value} já foi inserida`);
    } else {
        atividades.push(inputNomeAtividade.value);
        notas.push (nota)

        let linha = `<tr>`;
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${nota >= notaMinima ? imgAprovado : imgReprovado}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }

    inputNomeAtividade.value = "";
    inputNotaAtividade.value = "";
}

function atualizaTabela() {
    const bodyTabela = document.querySelector("tbody");
    bodyTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById("mediaFinalValor").innerHTML = mediaFinal;
    document.getElementById("mediaFinalResultado").innerHTML = mediaFinal >+ notaMinima ? spanAprovado : spanReprovado;

    console.log(media);
}

function calculaMediaFinal(){
    let somaDasNotas = 0;
    for (let i = 0 ; i < notas.length ; i++){
        somaDasNotas += notas [i];
    }

    return somaDasNotas / notas.length;
}