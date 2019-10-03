const $cep = document.getElementById('cep');
const $logradouro = document.getElementById('logradouro');
const $numero = document.getElementById('numero');
const $bairro = document.getElementById('bairro');
const $cidade = document.getElementById('cidade');
const $estado = document.getElementById('estado');




mostraCep = () => {
    const cep = $cep.value;
    const url = `https://api.postmon.com.br/v1/cep/${cep}`

    fetch(url).then(res => res.json()).then(dados => mostraDados(dados));
}

mostraDados = (dados) => {
    
   $bairro.value = dados.bairro;
    $cidade.value = dados.cidade;
    $estado.value = dados.estado;
    $logradouro.value = dados.logradouro;
}

$cep.addEventListener('blur',mostraCep);