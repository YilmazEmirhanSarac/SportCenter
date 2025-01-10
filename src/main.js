const navbar = document.getElementById('navbar');

// navbar scroll bg
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    navbar.classList.add('bg-main-blue');
    navbar.classList.remove('bg-transparent');
  } else {
    navbar.classList.remove('bg-main-blue');
    navbar.classList.add('bg-transparent');
  }
})

// Burger menu for mobile devices
const menuIcon = document.getElementById("menu-icon");
const burgerMenu = document.getElementById("burger-menu");

menuIcon.addEventListener("click", () => {
    burgerMenu.classList.toggle("hidden");
});

// Our Classes Section Events
const yoga = document.getElementById('yoga-class');
const yogaBtn = document.getElementById('yoga-button');

const group = document.getElementById('group-class');
const groupBtn = document.getElementById('group-button');

const solo = document.getElementById('solo-class');
const soloBtn = document.getElementById('solo-button');

const stretch = document.getElementById('stretching-class');
const stretchBtn = document.getElementById('stretching-button');

const classesBtns = document.querySelector('.buttons');

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('yoga-button').click();
  });

classesBtns.addEventListener('click', (e) => {
  const id = e.target.id;
  switch (id) {
    case 'yoga-button':
      yoga.classList.remove('hidden');
      yogaBtn.classList.add('bg-main-orange')

      group.classList.add('hidden');
      groupBtn.classList.remove('bg-main-orange')

      solo.classList.add('hidden');
      soloBtn.classList.remove('bg-main-orange')

      stretch.classList.add('hidden');      
      stretchBtn.classList.remove('bg-main-orange')
      break;
    case 'group-button':
        yoga.classList.add('hidden');
        yogaBtn.classList.remove('bg-main-orange')

        group.classList.remove('hidden');
        groupBtn.classList.add('bg-main-orange');

        solo.classList.add('hidden');
        soloBtn.classList.remove('bg-main-orange')

        stretch.classList.add('hidden');
        stretchBtn.classList.remove('bg-main-orange');
        break;
    case 'solo-button':
        yoga.classList.add('hidden');
        yogaBtn.classList.remove('bg-main-orange')

        group.classList.add('hidden');
        groupBtn.classList.remove('bg-main-orange')

        solo.classList.remove('hidden');
        soloBtn.classList.add('bg-main-orange')

        stretch.classList.add('hidden');
        stretchBtn.classList.remove('bg-main-orange');
        break;
    case 'stretching-button':
        yoga.classList.add('hidden');
        yogaBtn.classList.remove('bg-main-orange')

        group.classList.add('hidden');
        groupBtn.classList.remove('bg-main-orange')

        solo.classList.add('hidden');
        soloBtn.classList.remove('bg-main-orange')

        stretch.classList.remove('hidden');
        stretchBtn.classList.add('bg-main-orange');
        break;
    default:

          break;
   }
})


// bmi calculator

const weight = document.getElementById('weight');
const height = document.getElementById('height');
const bmiresult = document.querySelector('#bmi-result');
const bmiTriangle = document.querySelector('.bmi-triangle')

function bmiCalculate () {

  const weightKG = parseFloat(weight.value);
  const heightM = parseFloat(height.value) / 100 ;

  if (height.value === '' || weight.value === '') {
    return ;
  } else if (height.value == 0 || weight.value == 0) {
    return ;
  }

  //Formula
  const bmiFormula = weightKG / (heightM * heightM) ;
  bmiresult.textContent = bmiFormula.toFixed(2);

  let positioning = 0;

  if (bmiFormula < 18.5) {
    positioning = 10; 
  } else if (bmiFormula >= 18.5 && bmiFormula <= 24.9) {
    positioning = 30; 
  } else if (bmiFormula >= 25 && bmiFormula <= 29.9) {
    positioning = 50; 
  } else if (bmiFormula >= 30 && bmiFormula <= 34.9) {
    positioning = 70; 
  } else if (bmiFormula >= 35) {
    positioning = 90; 
    
  }
console.log(positioning);

bmiTriangle.style.left = `${positioning}%`; 
bmiTriangle.classList.remove('hidden');
}


weight.addEventListener('input', bmiCalculate);
height.addEventListener('input', bmiCalculate);