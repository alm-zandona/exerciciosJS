const button = document.getElementById('button_start')

const escrever = () => {
    const conteudo = document.getElementById('name_input').value
    alert(`Olá ${conteudo}, prazer em te conhecer`)
}

button.addEventListener('click', escrever)