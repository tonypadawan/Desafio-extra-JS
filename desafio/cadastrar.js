var cont = 0

function cadastrar(){
    let nome = document.getElementById('nome')
    let idade = Number(document.getElementById('idade').value)
    let skills = document.getElementById('skills')
    let resposta = document.getElementById('respostas')

    if(nome.value.length == 0 || skills.value.length == 0){
        alert('Por favor, insira os dados abaixo!')
    }else if(idade <= 0 || idade > 130){
        alert('Idade inválida! Insira a idade novamente!')
    }else{
        cont += 1
        if(cont > 3){
            resposta.innerHTML = ''
            cont = 1
        }

        resposta.innerHTML += `<p> <span class="tipo">Nome:</span> <span class="conteudo">${nome.value}</span> </p>`

        resposta.innerHTML +=`<p> <span class="tipo">Idade: ${parseInt(idade)}</span> </p>`

        resposta.innerHTML +=`<p> <span class="tipo">Skills:</span> <span class="conteudo">${skills.value}</span></p> <br> <br>`
    }
}