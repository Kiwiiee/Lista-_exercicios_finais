function SomaArray(numeros){
    let i = 0 
    numeros.forEach(element => {
        i = i + element
        
    });


    return i

}


function maiorNumero(numeros){
    let i = 0
    numeros.forEach(element => {
        if(element > i){
            i = element
        }
        
    })

    return i

}
function mediaArray(numeros){
    let i = 0 
    numeros.forEach(element => {
        i = i + element
        
    });

    let nItens = numeros.length 
    let resultado = i/nItens 

    return resultado

}
function contarPropriedades(objeto){
    let chaves = Object.keys(objeto)
    let contagem  = chaves.length

    console.log(contagem)

    return contagem


}
function juntarObjetos(objeto1 , objeto2){
    let objeto3 = {...objeto1, ...objeto2}

    return objeto3

}
function encontrarPropriedade(objeto , chave){
    let resultado = objeto[chave]
        return resultado
}

function delayedPromise(){
    const minhaPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(console.log("funcionou"));
        }, 1000);
      });

      return minhaPromise
      
}
function fetchData(){
    const dados = fetch("https://pokeapi.co/api/v2/pokemon/ditto", {method: 'GET'})
    dados.then(
        res => {
            console.log(res)
            return res
        }
    )
}
function gerarNumeroAleatorio(){
    const minhaPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(
            console.log(parseInt(Math.random() * 100)
          ));
        }, 2000);
      });
      return minhaPromise
}



function soma(){
        let i = 3 + 7
        return i

    }

let funcao = soma()
let tempo = 3000


function executarAposTempo(funcao, tempo){
setTimeout(() => {
    console.log(funcao)
}, tempo);

}

let resultado = executarAposTempo(funcao, tempo)




let timer = setTimeout(() => {console.log("olá")} , 3000)

function cancelarExecucao(timer){
    clearTimeout(timer)
}

cancelarExecucao(timer)





function intervaloPersonalizado(funcao){
    setInterval(() => {
        console.log(funcao)
    }, 3000);

}

let resultado2 = intervaloPersonalizado(funcao)





function contadorInterval(){
    i = 0
    let contagem = setInterval(() => {
            i++
            if(i == 10){
                clearInterval(contagem)
            }
            console.log(i)
         }, 1000);
    return contagem

}

let contador = contadorInterval()

function pararContador(){
    clearInterval(contador)

}

function gerarNumerosAleatorios(){
    setInterval(() => {
        console.log(parseInt(Math.random() * 100))
    }, 500);
}
function primeiroEUltimo(array){
    let novaArray = [array[0] , array[array.length - 1]]

    console.log(novaArray)

    return novaArray

}

function extrairInfo(lista){
    let idades = []
    lista.forEach((pessoa) => {
        idades.push(pessoa.idade)
    })

    console.log(idades)

    return idades


}

function separarArrays(lista){
    let par = []
    let impar = []
    lista.forEach((numero) => {
        if(numero % 2 === 0){
            par.push(numero)
        }else{
            impar.push(numero)
        }
    })

    console.log(par, impar)

}

function infoPessoa(pessoa){
    let string = `Nome: ${pessoa.nome} , Idade: ${pessoa.idade} , Cidade: ${pessoa.cidade}`

    console.log(string)

    return string
}

function desestruturarUsuario(pessoa){
    let pessoa2 = {id: pessoa.id, email: pessoa.email}

    console.log(pessoa2)
    return pessoa

}

function informacoesLivro(livro){
    let string = `O livro ${livro.nome} foi escrito por ${livro.id} em ${livro.email}`

    console.log(string)

    return string
}

function concatenarArrays(array1 , array2){
    let array3 = [...array1, ...array2]

    console.log(array3)
    return array3

}
function somaNumeros(...args){
    let soma = 0;
    for (let arg of args) soma += arg;
    console.log(soma)
    return soma;

}
function mesclarObjetos(obj1, obj2 , obj3){
    let objres = {...obj1, ...obj2 , ...obj3}
    console.log(objres)
    return objres

}