// 1 Referenciar o input 
// 2 Referenciar o button 
// 3 Referenciar  a lista 


let input = document.querySelector('input[name=tarefa]')
let btn = document.querySelector('#botao')
let lista = document.querySelector('#lista')

let tarefas = [
    'Estudar Frameworks',
    'Estudar Python',
    'Estudar JavaScript',
    'Ler um livro',
    'Assistir vídeos YTB'
]

function rt(){
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