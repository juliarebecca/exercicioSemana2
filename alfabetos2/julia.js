var letra = prompt("DIGITE UMA LETRA:");
var resposta = letra.toUpperCase();
switch (resposta == 'A' || resposta ==  'E' || resposta == 'I' || resposta == 'O' || resposta == 'U'){
    case true: alert('Você digitou uma vogal!');
        break;
    default: alert("Você digitou uma consoante!");
        break;
}