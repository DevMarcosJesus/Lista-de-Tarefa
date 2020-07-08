/* 
 1 Referenciar o input 
 2 Referenciar o button 
 3 Referenciar  a lista 
 */


let input = document.querySelector('input[name=tarefa]')
let btn = document.querySelector('#botao')
let lista = document.querySelector('#lista')
let card = document.querySelector('.card')

let tarefas = JSON.parse(localStorage.getItem('tarefas')) || []

function rt(){

    lista.innerHTML = ""

    for(tarefa of tarefas){
        // Criar item da lista
        let itemLista = document.createElement('li')
        //Adicionar class no item da lista
        itemLista.setAttribute('class','list-group-item list-group-item-action')

        //Add evento de click no item da lista
        itemLista.onclick = function(){
            removerTarefas(this)
        }
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

        saveDateInStorage()

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

function removerTarefas(tar){
    tarefas.splice(tarefas.indexOf(tar.textContent), 1)

    rt()

    saveDateInStorage()
}

function saveDateInStorage(){
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
}