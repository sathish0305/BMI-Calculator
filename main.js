let height = document.getElementById('height')
let heightDisplay = document.getElementById('heightDisplay')
let weight = document.getElementById('weight')
let weightAdd = document.getElementById('add')
let weightMinus = document.getElementById('minus')
let calculate = document.getElementById('calculate')
let modalTitle = document.getElementsByClassName('modal-title')[0]
let modalBody = document.getElementsByClassName('modal-body')[0]
height.addEventListener('input',()=>{
    let heightValue = height.value
    heightDisplay.innerHTML = heightValue
})

weightAdd.addEventListener('click',()=>{
    weight.innerHTML = ++weight.value
})

weightMinus.addEventListener('click',()=>{
    weight.innerHTML = --weight.value
})

calculate.addEventListener('click',()=>{
    let currentHeight = height.value
    let currentWeight = weight.value
    if (isNaN(currentWeight) || isNaN(currentHeight) || currentWeight <= 0 || currentHeight <= 0) {
        modalTitle.innerHTML = 'Enter valid Height and Weight'
        modalTitle.style.color = 'red'
        modalBody.style.display = 'none'
    }else{
        modalTitle.innerHTML = 'Your BMI Score'
        modalBody.style.display = 'block'
        modalTitle.style.color = 'black'
    }


})
