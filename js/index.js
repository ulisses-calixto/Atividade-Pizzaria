function fazerPedido() {
    const nome = document.querySelector("input[type='text']").value.trim();
    if (nome === "") {
        alert("Por favor, preencha o nome antes de fazer o pedido.");
        return;
    }
    console.log('Nome: ' + nome);
    let selecionado = document.querySelector("input[name='tamanho']:checked");
    let precoPizza = 0;
    if (selecionado.value === "Pequena") {
        precoPizza = 25;
    } else if (selecionado.value === "Média") {
        precoPizza = 35;
    } else if (selecionado.value === "Grande") {
        precoPizza = 50;
    }
    console.log('Tamanho: ' + selecionado.value);
    let selecionados = document.querySelectorAll("input[name='adicionais']:checked");
    const adicionais = selecionados.length * 5;
    console.log('Valor dos adicionais: R$ ' + adicionais);
    let valorFinal = precoPizza + adicionais;
    let valorTotal = document.querySelector("#total h2 strong");
    valorTotal.textContent = valorFinal;
    console.log('Valor total: R$ ' + valorTotal);
    console.log('Valor total alterado: ' + selecionados.length);
}

