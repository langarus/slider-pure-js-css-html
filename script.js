const directoryLocation = "./images/"
//i = the first name of the picture without extension
let i = 1

//if you have multiple images just change to the number-name of your last image

//this function changes the image
function changeImage(value){
  const sliderImage = document.querySelector(".slider-main-image")

  if (value === "increase"){
    i === 4 ? i = 1 : i++
    sliderImage.src = directoryLocation + i + ".jpg"
  }else if(value === "decrease"){
    i === 1 ? i = 4 : i--
    sliderImage.src = directoryLocation + i + ".jpg"
  }
  console.log(i)
}

//using async and promise to change the image making timeout syncronous
async function automaticSliderChange() {
  const divContainer = document.querySelector(".slider-main-container")

  divContainer.addEventListener("mouseover", () => divContainer.dataset.hover = "true")  
  divContainer.addEventListener("mouseout", () => divContainer.dataset.hover = "false")

  if(divContainer.dataset.hover === "false"){
    changeImage("increase")
  }
  new Promise((resolve) => {
    setTimeout(() => resolve(automaticSliderChange()), 2000)
  });
}

//make the buttons change the image
function changeImagesWithButtons(){
  document.querySelector(".left-side").addEventListener("click", () => changeImage("decrease"))
  document.querySelector(".right-side").addEventListener("click", () => changeImage("increase"))
}

automaticSliderChange();
changeImagesWithButtons();



