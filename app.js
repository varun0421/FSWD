var button = document.querySelector('button')
var buody = document.querySelector('body')


const callbackfunc = (event) => {
    buody.classList.toggle('dark')    
}
button.addEventListener ('click', callbackfunc)