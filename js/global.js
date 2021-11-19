const cardNovaLista = document.getElementById("cardNovaLista")
const btnNovaLista = document.getElementById("btnNovaLista")
const formNovaLista = document.getElementById("novaLista")
const divListas = document.getElementById('listas')


let listas = []


btnNovaLista.addEventListener("click",function() {
    cardNovaLista.style.display = "block"
})

formNovaLista.addEventListener('submit', function(event) {
    event.preventDefault()
    const inputTitulo = document.querySelector('input[name="tituloLista"]')
    if(inputTitulo.value != ""){
        const novaLista = {
            id: listas.length + 1,
            titulo: inputTitulo.value
        }
        inputTitulo.value = ""
        listas.push(novaLista)
        window.localStorage.listas = JSON.stringify(listas)
        renderList()
    }
})

formNovaLista.addEventListener('reset', function(event) {
    cardNovaLista.style.display = "none"
})

//funcao para adicionar os itens na tela
function renderList(){
    //lendo as listas salvas no localstorage
    listas = JSON.parse(window.localStorage.listas)
    //limpa a div que recebe os cards das listas
    divListas.innerHTML = ""
    //para ca lista no array de lista, cria um novo card
    listas.map(lista => {
        //criando um título para o card
        let h2Tag = document.createElement('H2')
        //adiciona o titulo
        h2Tag.innerHTML = lista.titulo
        //cria botao
        let btnAddItem = document.createElement('BUTTON')
        btnAddItem.innerHTML = "novo item"
        //cria uma div para ser o card da lista
        let divTag = document.createElement('DIV')
        //add classe card-lista a div para o css
        divTag.setAttribute('class','card-lista')
        //add o h2 a div
        divTag.appendChild(h2Tag)
        divTag.appendChild(btnAddItem)
        //add a div card-lista a div que contem todas as listas na tela
        divListas.appendChild(divTag)
        console.log(divTag)
    })
}

//verifica se existe algo no localstorage para iniciar
if (window.localStorage.listas?.length > 0) {
    renderList()
}
