function verificar() {
    var data = new Date() //variável data
    var ano = data.getFullYear() //variável ano
    var formAno = document.getElementById('txtano') //variavel do ano de nascimento retirada do html
    var res = document.getElementById('res') //variavel resultado 
    if(formAno.value.length == 0 || formAno.value > ano){  //definindo um alerta caso o ano escrito pelo usuário for nulo ou maior do que o ano atual
        window.alert('[ERRO] Verifique os dados e tente novamente')//alerta definido
    }else { // caso o usuário coloque um ano permitido, irá executar esta parte do código
        var fsex = document.getElementsByName('radsex') //variável referente ao radio button "homem" e "mulher" pois ambos tem o mesmo name
        var idade = ano - Number(formAno.value) //variável na qual irá fornecer a idade atual da pessoa pesquisada
        var genero = '' //variavel genero fica sem atributo setado diretamente pois ela terá duas opções que serão ditas abaixo
        var img = document.createElement('img') //criando um elemento "imagem" onde irá ser colocado a foto das pessoas
        img.setAttribute('id', 'foto') //setando os atributos da "img" criada acima
        if (fsex[0].checked){ //se o radio button 0 for selecionado (este valor 0 foi selecionado no html como "min=0", ou seja, a contagem dos radio buttons colocados começará do 0)
            genero = 'Homem' //ira implementar o valor "homem" para gênero
            if (idade >=0 && idade < 2){ //se a idade for maior ou igual a 0 e menor que 2
                img.setAttribute('src', 'images/bebe.png') //implementar imagem do bebe
                document.body.style.background = '#BF8773' //mudando o background
            } else if (idade >= 2 && idade < 12){ //se a idade for maior ou igual a 2 e menor que 12
                img.setAttribute('src', 'images/menino.png') //implementar a imagem da crinaça
                document.body.style.background = '#F24607' //mundando o background
            } else if (idade >= 12 && idade < 30){
                //adulto
                img.setAttribute('src', 'images/homem.png')
                document.body.style.background = '#F27052'
            } else{
                //idoso
                img.setAttribute('src', 'images/idoso.png')
                document.body.style.background = '#8A8D91'
            }   
        } else if (fsex[1].checked){ //se o radio button selecionado for igual a 1
            genero = 'Mulher' //irá implementar "mulher" na variável "genero"
            if (idade >=0 && idade < 2){
                //bebe
                img.setAttribute('src', 'images/bebe.png')
                document.body.style.background = '#BF8773'
            } else if (idade >= 2 && idade < 12){
                //criança
                document.body.style.background = '#F36A00'
                img.setAttribute('src', 'images/menina.png')
                document.body.style.background = '#BF8773'
            } else if (idade >= 12 && idade < 30){
                //adulto
                img.setAttribute('src', 'images/mulher.png')
                document.body.style.background = '#BAD9D9'
            } else{
                //idoso
                img.setAttribute('src', 'images/idosa.png')
                document.body.style.background = '#A66D58'
            }
        }
        res.style.textAlign = 'center' //alinhan do a resposta
        res.innerHTML = `Detectamos ${genero} com ${idade} anos <br>` //escrevendo na tela a resposta
        res.appendChild(img)  //adicionando o elemento filho (img) após o "res"
    }  
}