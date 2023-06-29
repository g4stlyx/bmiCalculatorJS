function bmi_calculator(){
    let weight = parseFloat(document.getElementById("weight").value)
    let height = parseFloat(document.getElementById("height").value)
    let result = document.getElementById("result")


    if(isNaN(weight) || isNaN(height)){
        result.innerHTML = `<br>Please enter valid values for weight and height`
        return;
    }

    let index = weight / ((height/100)**2)
    index = index.toFixed(2) // to limit its decimals to 2

    category = ""

    if(index<18.5){
        category="Under Weight"
    }
    else if(index>= 18.5 && index<25){
        category="Normal Weight"
    }
    else if(index>=25 && index<30){
        category="Overweight"
    }
    else{
        category="Obese"
    }

    result.innerHTML = "<br>Your BMI: "+ index + "<br>Category: "+ category

}



