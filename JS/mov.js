// 1 Referenciar o input 
// 2 Referenciar o button 
// 3 Referenciar  a lista 


let input = document.querySelector('input[name=tarefa]')
let btn = document.querySelector('#botao')
let lista = document.querySelector('#lista')
let card = document.querySelector('.card')

let tarefas = [
    'Estudar Frameworks',
    'Estudar Python',
    'Estudar JavaScript',
    'Ler um livro',
    'Assistir vídeos YTB'
]

function rt(){

    lista.innerHTML = ""

    for(tarefa of tarefas){
        // Criar item da lista
        let itemLista = document.createElement('li')
        //Adicionar class no item da lista
        itemLista.setAttribute('class','list-group-item list-group-item-action')
        //Criar um texto
        let itemTexto = document.createTextNode(tarefa)
        //Adicionar o texto no item da lista
        itemLista.appendChild(itemTexto)
        //Adicionar o item da lista na lista
        lista.appendChild(itemLista)
     }
}

rt()

btn.onclick = function(){
    let novaTarefa = input.value

    if(novaTarefa !== ""){
        
        tarefas.push(novaTarefa)

        rt()

        input.value = ""

        removerSpans()

    }else{

        removerSpans()

        let span = document.createElement('span')

        span.setAttribute('class','alert alert-warning')

        let msg = document.createTextNode('Você precisa fornecer uma tarefa.')

        span.appendChild(msg)

        card.appendChild(span)
    }

}

function removerSpans(){
    let spans = document.querySelectorAll('span')

    for(let i = 0; i < spans.length; i++){
        card.removeChild(spans[i])
    }
}
