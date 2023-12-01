function calcularTotal() {
    var marca = document.getElementById("marca").value;
    var modelo = document.getElementById("modelo").value;
    var placa = document.getElementById("placa").value;
    var combustivel = document.getElementById("combustivel").value;
    var peso = parseFloat(document.getElementById("peso").value) || 0;
    var direcao = document.getElementById("direcao").checked;
    var garantia = document.getElementById("garantia").checked;

    var totalAcessorios = (direcao ? 500 : 0) + (garantia ? 1000 : 0);

    var resumo = document.getElementById("resumo");
    resumo.innerHTML = "<p>Marca: " + marca + "</p>" +
                       "<p>Modelo: " + modelo + "</p>" +
                       "<p>Placa: " + placa + "</p>" +
                       "<p>Combustível: " + combustivel + "</p>" +
                       "<p>Peso: " + peso + " kg</p>" +
                       "<p>Direção Hidráulica: " + (direcao ? "Sim" : "Não") + "</p>" +
                       "<p>Garantia: " + (garantia ? "Sim" : "Não") + "</p>" +
                       "<p>Total: R$ " + (peso + totalAcessorios).toFixed(2) + "</p>";
}