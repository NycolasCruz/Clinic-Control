const form = document.forms['form']
const feedback = document.querySelector('#feedback')
const borderCpf = document.querySelector('#cpf')

function validCpf(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '')
    if (cpf == '')
        return false
    if (cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999")
        return false
    add = 0
    for (i = 0; i < 9; i++)
        add += parseInt(cpf.charAt(i)) * (10 - i)
    rev = 11 - (add % 11)
    if (rev == 10 || rev == 11)
        rev = 0
    if (rev != parseInt(cpf.charAt(9)))
        return false
    add = 0
    for (i = 0; i < 10; i++)
        add += parseInt(cpf.charAt(i)) * (11 - i)
    rev = 11 - (add % 11)
    if (rev == 10 || rev == 11)
        rev = 0
    if (rev != parseInt(cpf.charAt(10)))
        return false
    return true
}

function validationFeedback(){
    let hasEmptyInput = false
    let inputCpf = {
        cpf: form.cpf.value
    }
    if(someInputIsEmpty(inputCpf.cpf) || !validCpf(inputCpf.cpf)){
        feedback.style.display = 'block'
        feedback.innerHTML = 'CPF inválido' //mostrar só no ultimo texto
        feedback.setAttribute('class', 'invalid-feedback')
        borderCpf.setAttribute('class', 'form-control')
        hasEmptyInput = true
    }else{
        feedback.style.display = 'block'
        feedback.innerHTML = ''
        feedback.setAttribute('class', 'valid-feedback')
        borderCpf.setAttribute('class', 'form-control border-cpf')
    }
    if(hasEmptyInput){
        return false
    }else{
        return true
    }
}

function someInputIsEmpty(input) {
    if(input.length == 0) {
        return true
    }
}