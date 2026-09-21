/* app/static/js/main.js */

console.log("Iron Base System Loaded.");

/* --- CÁLCULOS --- */
function calcularIMC(peso, altura) {
    let p = parseFloat(peso);
    let a = parseFloat(altura);
    if (!p || !a || a === 0) return null;
    if (a > 3) { a = a / 100; } // Ajusta cm para m
    return (p / (a * a)).toFixed(2);
}

function classificarIMC(imc) {
    if (imc < 18.5) return "Abaixo do peso";
    if (imc >= 18.5 && imc < 24.9) return "Eutrofia (Peso Normal)";
    if (imc >= 24.9 && imc < 29.9) return "Sobrepeso";
    return "Obesidade";
}

function atualizarVisorIMC() {
    const inputPeso = document.getElementById("peso");
    const inputAltura = document.getElementById("altura");
    const divResultado = document.getElementById("resultado-imc");

    if (!inputPeso || !inputAltura) return;

    const peso = inputPeso.value;
    const altura = inputAltura.value;

    if (peso && altura) {
        const imc = calcularIMC(peso, altura);
        document.getElementById("valor-imc").innerText = imc;
        document.getElementById("msg-imc").innerText = classificarIMC(imc);
        divResultado.style.display = "block";
    } else {
        divResultado.style.display = "none";
    }
}

/* --- ENVIO WHATSAPP (Ajustado) --- */
function enviarWhatsapp() {
    const inputPeso = document.getElementById("peso");
    const inputAltura = document.getElementById("altura");

    const numeroWhatsapp = document.body.dataset.whatsapp;

    let mensagem = "";
    
    if (inputPeso && inputAltura && inputPeso.value && inputAltura.value) {
        const imc = calcularIMC(inputPeso.value, inputAltura.value);
        const classif = classificarIMC(imc);
        
        // MENSAGEM SÉRIA E COMPLETA
        mensagem = `Olá, Isaque. Gostaria de submeter minha pré-avaliação para análise.\nBusco um acompanhamento sério para evolução de performance.\n\n*Dados Iniciais:*\n- Peso: ${inputPeso.value}kg\n- Altura: ${inputAltura.value}m\n- IMC Estimado: ${imc} (${classif})\n\nAguardo orientações sobre como proceder com a consultoria.`;
    
    } else {
        // MENSAGEM PADRÃO SÉRIA
        mensagem = "Olá, Isaque. Tenho interesse em iniciar a Consultoria Iron Base. Gostaria de evoluir minha performance.";
    }

    const url = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
}

// Listeners
const campoPeso = document.getElementById("peso");
const campoAltura = document.getElementById("altura");
if (campoPeso && campoAltura) {
    campoPeso.addEventListener("input", atualizarVisorIMC);
    campoAltura.addEventListener("input", atualizarVisorIMC);
}