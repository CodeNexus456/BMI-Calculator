
let calculetor = document.getElementById("calc");

calculetor.addEventListener("click",()=>{
  const height =(document.getElementById("height").value);
  const weight = (document.getElementById("weight").value);

  const result = document.getElementById("ans");

  // validation 

  if(height === "" || weight === "" || height <= 0 || weight <= 0)  {
    result.innerHTML = "Please enter valid height and weight";
    result.style.color = "#cd3235";
    return;
  }

  // Convert in meter
  const heightInMeter = height / 100;

  // BMI formula

  const bmi = weight / (heightInMeter * heightInMeter);

  let massage = "";
  if(bmi < 18.5 ) {
    massage = "Underweight"
  } else if(bmi >= 18.5 && bmi < 25){
    massage = "Normal Weight"
  } else if(bmi >=25 && bmi < 30) {
    massage = "Overweight";
  } else {
    massage = "Obese";
  }

  result.innerHTML = `<h2>Your BMI ${bmi.toFixed(2)}</h2> <p>${massage}</p>`;
});