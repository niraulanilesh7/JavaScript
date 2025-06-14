const form=document.querySelector('form')

form.addEventListener('submit',function(e){
  e.preventDefault()
  const height1=document.querySelector('#height')
  const weight1=document.querySelector('#weight')
  height1.style.border ="none"
  weight1.style.border ="none"
  const height=parseInt(document.querySelector('#height').value)
  const weight=parseInt(document.querySelector('#weight').value)
  const result=document.querySelector('#results')
  if(height==='' || height<0 || isNaN(height)){
    height1.style.border = "2px solid red"
    if(weight==='' || weight<0 || isNaN(weight)){
      result.innerHTML="Please give a valid height and weight"
      weight1.style.border = "2px solid red"
    }
    else{
      result.innerHTML="Please give a valid height"
    }
  }
  else if(weight==='' || weight<0 || isNaN(weight)){
    result.innerHTML="Please give a valid weight"
    weight1.style.border = "2px solid red"
  }
  else{
    const bmi=(weight/((height*height)/10000)).toFixed(2)
    let text;
    if(bmi<18.6){
        text="You are underweight"
    }
    else if(bmi<24.9){
        text="You weight is normal"
    }
    else{
        text="You are overweight"
    }
    result.innerHTML=`<span>${bmi}</span>
    <p>${text}</p>`
  }
})