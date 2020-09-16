//Procurar o botao
document.querySelector("#add-time")
//Quando clicar no botao
.addEventListener('click', cloneField)

//Executar  uma ação
function cloneField() {
    //Duplicar os campos
    const newfieldContainer = document.querySelector('.schedule-item').cloneNode(true)
    
    //selecionar os campos para limpar
    const fields = newfieldContainer.querySelectorAll('input')
    //para cada campo, limpar
    fields.forEach(function(field) {
        //pegar o field do momento
        field.value = ""
    })

    //Colonar na página
    document.querySelector('#schedule-items').appendChild(newfieldContainer)
}