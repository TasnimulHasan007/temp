const contents = document.querySelectorAll('.content')
const buttons = document.querySelectorAll('button')

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    contents.forEach(content => {
      content.classList.add('hidden')
    })
    contents[index].classList.remove('hidden')
  })
})
