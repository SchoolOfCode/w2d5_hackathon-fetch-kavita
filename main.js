
const answers = [];

async function getData() {
    const response = await fetch("https://opentdb.com/api.php?amount=10&type=boolean")
    const data = await response.json()
    console.log(data)
    for (let i=0; i < 10; i++) {

        const qu = document.createElement("p")
        qu.innerText = `${i+1}. ${data.results[i].question}`
        let divs = document.querySelectorAll("div")
        divs[i].prepend(qu)
      
        answers.push(data.results[i].correct_answer)
    }
    let button = document.querySelector("button")
    button.addEventListener("click", checkFunction)
   }
    
getData()
