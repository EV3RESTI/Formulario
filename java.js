// Adicione aqui o seu JavaScript personalizado se necessário

document.addEventListener('DOMContentLoaded', function() {
    // Exemplo: alerta quando o formulário é enviado
    document.querySelector('form').addEventListener('submit', function(event) {
      event.preventDefault(); // Evita o envio padrão do formulário
      alert('Formulário enviado!');
    });
  });