const txtTarefa = document.querySelector('input#txtTarefa')
const btnAdd = document.querySelector('img#add')
const board = document.querySelector('div#board')

const addDeleteEvent = () => {
  btnCheckList = document.querySelectorAll('img.check')

  btnCheckList.forEach(btn => {
    // Excluir to-do
    btn.addEventListener('click', event => {
      event.target.closest('div.tarefa').remove()
    })
  });
}

// Iniciar o evento de deletar para os elementos ja existentes
addDeleteEvent()

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

const isEmpty = (txtValue) => {
  if (txtValue)
    return true

  txtTarefa.classList.toggle('border-0')
  txtTarefa.classList.toggle('btn-outline-danger')

  return false
}

txtTarefa.addEventListener('focus', () => {
  if (txtTarefa.classList.contains('btn-outline-danger')) {
    txtTarefa.classList.toggle('border-0')
    txtTarefa.classList.toggle('btn-outline-danger')
  }
})

btnAdd.addEventListener('click', event => {
  if (isEmpty(txtTarefa.value))
    addTarefa()
})

document.addEventListener('keypress', event => {
  if (event.keyCode == 13) { // Tecla enter
    if (isEmpty(txtTarefa.value))
      addTarefa()
  }
})
