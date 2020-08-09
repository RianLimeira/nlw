//Procurar o botao
document.querySelector("#add-time")
//Quando clicar no botao
.addEventListener('click', cloneField)

//Executar uma acao
function cloneField() {
    console.log("Ola mundo")

    //Duplicar os campos. Que campos ?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //pegar os campos
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo, limpar
    fields.forEach(function(field) {
        //pegar o field do momento e limpa ele
        field.values = ""
    })
    
    //Colocar na pagina: onde ?
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}