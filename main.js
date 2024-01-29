let height = document.getElementById('height')
let heightDisplay = document.getElementById('heightDisplay')
let weight = document.getElementById('weight')
let weightAdd = document.getElementById('add')
let weightMinus = document.getElementById('minus')
let calculate = document.getElementById('calculate')
let modalTitle = document.getElementsByClassName('modal-title')[0]
let modalBody = document.getElementsByClassName('modal-body')[0]
let details  = document.getElementById('details')
let darkmode = document.getElementById('dark')
let light = document.getElementById('light')
let main = document.getElementsByTagName('main')[0]
let darkmodetheme = document.getElementsByClassName('darkmode')
let darkcollection = Array.from(darkmodetheme)
document.body.style.background = '#D1D9E6'


darkmode.addEventListener('click',()=>{
    main.classList.add('dark-main')
    darkcollection.forEach((ele)=>{
        ele.style.background = '#373737'
        ele.style.color = 'white'
    })
    weight.style.background='#373737'
    weight.style.color='white'
    darkmode.style.backgroundImage = "url('/Vector_dark_.svg')";
    light.style.backgroundImage = "url('/Vector_dark.svg')";
    document.body.style.background = '#525252'
})

light.addEventListener('click',()=>{
    main.classList.remove('dark-main')
    darkcollection.forEach((ele)=>{
        ele.classList.remove('darkmode')
        ele.style.background = 'white'
        ele.style.color = 'black'
    })
    weight.style.background='white'
    weight.style.color='black'
    darkmode.style.backgroundImage = "url('/Vector_dark_light.svg')";
    light.style.backgroundImage = "url('/Vector_light.svg')";
    document.body.style.background = '#D1D9E6'
})

height.addEventListener('input', () => {
    let heightValue = height.value
    heightDisplay.innerHTML = heightValue
})

weightAdd.addEventListener('click', () => {
    weight.innerHTML = ++weight.value
})

weightMinus.addEventListener('click', () => {
    weight.innerHTML = --weight.value
})

calculate.addEventListener('click', () => {
    let currentHeight = height.value
    let currentWeight = weight.value
    if (isNaN(currentWeight) || isNaN(currentHeight) || currentWeight <= 0 || currentHeight <= 0) {
        modalTitle.innerHTML = 'Enter valid Height and Weight'
        modalTitle.style.color = 'red'
        modalBody.style.display = 'none'
    } else {
        modalTitle.innerHTML = 'Your BMI Score'
        modalBody.style.display = 'block'
        modalTitle.style.color = 'black'
        let meters = currentHeight / 100
        let bmi = currentWeight / (meters * meters)
        bmi = bmi.toFixed(2)
        console.log(bmi)
        document.getElementById('result').innerHTML =  bmi;
        if(bmi<18.5){
            details.innerHTML = `Being <span style='color:blue';>underweight</span> can have health implications and may indicate that you're not getting enough nutrients to maintain a healthy body weight. It's essential to address this to ensure your overall well-being.`
        }else if(bmi>=18.5 && bmi<=24.9){
            details.innerHTML = `Being <span style='color:green';>Normal Weight</span> This means that, based on your height and weight, you are considered to have a healthy body weight.`
        }else if(bmi>=25 && bmi<=29.9){
            details.innerHTML = `Being <span style='color:orange';>Over Weight</span> means that you have a higher amount of body fat relative to your height. This can have implications for your overall health and well-being.`
        }else if(bmi>=30){
            details.innerHTML = `Being <span style='color:red';>Obesity</span> This indicates that your body weight is higher than the recommended range for your height, posing potential health risks. Obesity is associated with an increased risk of various health conditions, including heart disease, diabetes, and certain types of cancer.`
        }
    }
})
