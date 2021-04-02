const myButton = document.querySelector('button')
const square1 = document.querySelector('square--black')
const square2 = document.querySelector('square--grey')

myButton.addEventListener('click', function() {
    console.log('klik')
        // console.log(square1)
    square1.style.display = 'none'
})