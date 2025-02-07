function comprar() {
    let tipo = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);
    //alert(tipo);
    //alert(quantidade);
    if(tipo == 'pista') {
        comprarPista(quantidade);
    } else if (tipo == 'superior') {
        comprarSuperior(quantidade);
    } else {
        comprarInferior(quantidade);
    }
}

function comprarPista(quantidade) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (quantidade > qtdPista) {
        alert('Quantidade de ingressos tipo PISTA não disponível! Confira novamente.');
    } else {
        qtdPista = qtdPista - quantidade;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Sucesso! Você realizou a compra dos ingressos (PISTA).')
    }
}

function comprarSuperior(quantidade) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (quantidade > qtdSuperior) {
        alert('Quantidade de ingressos tipo SUPERIOR não disponível! Confira novamente.');
    } else {
        qtdSuperior = qtdSuperior - quantidade;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Sucesso! Você realizou a compra dos ingressos (SUPERIOR).')
    }
}

function comprarInferior(quantidade) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (quantidade > qtdInferior) {
        alert('Quantidade de ingressos tipo INFERIOR não disponível! Confira novamente.');
    } else {
        qtdInferior = qtdInferior - quantidade;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Sucesso! Você realizou a compra dos ingressos (INFERIOR).')
    }
}