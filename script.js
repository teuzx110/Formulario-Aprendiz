// COLE AQUI O URL GERADO NO GOOGLE APPS SCRIPT
const URL_PLANILHA = "https://script.google.com/macros/s/AKfycbxUcemUYtsZBVOgo9r-rIDLuVBl4OeRD_anSoxDs54fygyUq-N-RyPq8GS09pB7PsRNIw/exec";

const form = document.getElementById("formulario");
const aviso = document.getElementById("aviso");
const btnEnviar = document.getElementById("btn-enviar");

form.addEventListener("submit", function(evento) {
    evento.preventDefault(); // Evita que a página recarregue

    // Muda o estado do botão
    btnEnviar.textContent = "Enviando dados...";
    btnEnviar.disabled = true;
    
    // Limpa mensagens de aviso anteriores
    aviso.textContent = "";
    aviso.className = "";

    // Envia os dados
    fetch(URL_PLANILHA, {
        method: "POST",
        mode: "no-cors",
        body: new FormData(form)
    })
    .then(function() {
        // Como estamos usando no-cors, assumimos sucesso se não der erro de rede
        aviso.textContent = "Cadastro realizado com sucesso!";
        aviso.className = "sucesso";
        form.reset(); // Limpa os campos do formulário
    })
    .catch(function(error) {
        aviso.textContent = "Erro ao enviar. Verifique sua conexão e tente novamente.";
        aviso.className = "erro";
    })
    .finally(function() {
        // Restaura o botão
        btnEnviar.textContent = "Enviar Cadastro";
        btnEnviar.disabled = false;
    });
});