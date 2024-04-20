const formu = document.getElementById('formulario');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji comemorado" />'
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji triste" />'
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado!</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado!</span>';


let linhas = '';

formu.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaMedia();
    atualizaTabela();
})

function adicionaLinha(){
    const nomeAti = document.getElementById('nome-atividade');
    const notaAti = document.getElementById('nota-atividade');

    if(atividades.includes(nomeAti.value)){
        alert(`A atividade ${nomeAti.value}, já existe!`)
    }

    else{
        atividades.push(nomeAti.value);
        notas.push(parseFloat(notaAti.value));


        let linha = '<tr>';
        linha += `<td>${nomeAti.value}</td>`;
        linha += `<td>${notaAti.value}</td>`;
        linha += `<td>${notaAti.value >= 7 ? imgAprovado : imgReprovado}</td>`;
        linha += '</tr>';

        linhas += linha;
    }
    
    nomeAti.value = '';
    notaAti.value = '';
    
    
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}


function calculaMedia(){
    let somaNotas = 0

    for(let i = 0; i < notas.length; i++){
    somaNotas = somaNotas + notas[i];
    }
    return somaNotas / notas.length
}

function atualizaMedia(){
    const mediaFinal = calculaMedia();
    console.log(mediaFinal)
    document.getElementById('media-final').innerHTML = mediaFinal
    document.getElementById('media-resultado').innerHTML = mediaFinal >= 7 ? spanAprovado : spanReprovado;
}