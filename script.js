const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let hackedElem = document.querySelector("#hacked")
let interval = null;

   let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    hackedElem.innerText = hackedElem.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return hackedElem.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= hackedElem.dataset.value.length){
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);