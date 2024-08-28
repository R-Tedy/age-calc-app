let inputBox = document.getElementById('date-input');
inputBox.max = new Date().toISOString().split("T")[0];
const result = document.querySelector('.results')

function ageGenerator(){
  let pickedDate = new Date(inputBox.value);

  let d1 = pickedDate.getDate();
  let m1 = pickedDate.getMonth() + 1;
  let y1 = pickedDate.getFullYear();

  let todaysDate = new Date()

  let d2 = todaysDate.getDate();
  let m2 = todaysDate.getMonth() + 1;
  let y2 = todaysDate.getFullYear();

  let d3, m3, y3;

  y3 = y1 - y2;

  if (m1 >= m2){
    m3 = m1 - m2;
  } else {
    m3 = 12 + m1 - m2;
    y3--;
  }
  
  if (d1 >= d2){
    d3 = d1 - d2;
  } else{
    d3 = getDaysInMonth(y1, m1) + d2 - d1;
    m3--;
  }

  if (m3 < 0){
    m3 = 11;
    y3--;
  }

  result.innerHTML = `You are ${y3} Years, ${m3} Months and ${d3} Days Old`
}

function getDaysInMonth(year, month){
  return new Date (year, month, 0).getDate();
}