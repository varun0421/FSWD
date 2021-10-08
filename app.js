const a = document.querySelectorAll('input')[0]
const b = document.querySelectorAll('input')[1]
const add = document.querySelector('#add')
const sub = document.querySelector('#subract')
const multiply = document.querySelector('#multiply')
const resultBox  = document.querySelector('.result')
 
// const sum = ()=>{
//     const result = parseInt(a.value) + parseInt(b.value)
//     resultBox.innerHTML = result
// }

// const mul = ()=>{
//     const result = parseInt(a.value) * parseInt(b.value)
//     resultBox.innerHTML = result
// }
const calculate = (event,operation) => {
    // if (operation == 'add'){
    //     const result = parseInt(a.value) + parseInt(b.value)
    //     console.log(result)
    //     resultBox.innerHTML = result  
    // }
    // else if (operation == 'multiply'){
    //     const result = parseInt(a.value) * parseInt(b.value)
    //     console.log(result)
    //     resultBox.innerHTML = result    
    // }
    switch(operation){
        case "add":
            resultBox.innerHTML = parseInt(a.value) + parseInt(b.value)
            break
        case "multiply":
            resultBox.innerHTML = parseInt(a.value) * parseInt(b.value)   
            break
        case "subract":
            resultBox.innerHTML = parseInt(a.value) - parseInt(b.value)    
            break
        default :
        resultBox.innerHTML = "Not Valid operation"    
    }
    
    
}
// add.addEventListener('click',sum)
// multiply.addEventListener('click',mul)

add.addEventListener('click', () => calculate(event,'add'))
sub.addEventListener('click', () => calculate(event,'subract'))
multiply.addEventListener('click', () => calculate(event,'multiply'))