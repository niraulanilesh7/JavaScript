const clock= document.getElementById('clock')
const date1= document.getElementById('date')


setInterval(function(){
  let date= new Date()
  clock.innerHTML=date.toLocaleTimeString()
  date1.innerHTML=date.toLocaleDateString()
}, 1000)