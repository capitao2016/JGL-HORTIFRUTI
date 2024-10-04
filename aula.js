const container = document.querySelector('.container')
const botao = document.querySelector('#criar')

botao.addEventListener('click', ()=>{
    const input = document.createElement('input')
    input.type = 'radio'
    input.name = 'radio'
    input.id = 'radio'
    container.appendChild(input)
    console.log(input)
})
