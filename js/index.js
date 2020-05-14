const txtTarefa = document.querySelector('input#txtTarefa')
const btnAdd = document.querySelector('img#add')
const board = document.querySelector('div#board')

const addTarefa = () => {
  let tarefa = document.createElement('div')
  tarefa.classList.add('tarefa')
  
  let divTxtTarefa = document.createElement('div')
  divTxtTarefa.classList.add('col-md-8')

  let divBtnCheck = document.createElement('div')
  divBtnCheck.classList.add('col-md-2')
  
  let imgCheck = document.createElement('img')
  imgCheck.classList.add('icon', 'check')
  imgCheck.setAttribute('src', 'img/check.png')

  divTxtTarefa.append(txtTarefa.value)

  divBtnCheck.append(imgCheck)

  tarefa.append(divTxtTarefa)
  tarefa.append(divBtnCheck)

  board.append(tarefa)

  // Adicionar evento para excluir to-do
  addDeleteEvent()

  txtTarefa.value = ''
}

btnAdd.addEventListener('click', event => {
  addTarefa()
})

document.addEventListener('keypress', event => {
  if (event.keyCode == 13) // Tecla enter
    addTarefa()
})
