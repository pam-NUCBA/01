
//me gustó esta forma de hacerlo: podemos hacer un constructor y meter ahí las funciones... como un objeto, si lo pensamos, con this y métodos dentro!

//vamos a tomar con esto cada valor que apretemos:
class Calculator {
  constructor(prevOp, currOp) {
    this.prevOp = prevOp //el botón que hayamos apretado antes
    this.currOp = currOp //el que apretamos ahora
    this.clear()
  }
    //al hacerlas dentro del constructor, podemos obviar el const:

    //clearAll va a limpiar toda la pantalla
    clearAll() {
      this.currOp = ''
      this.prevOp = ''
      this.operator = undefined
    }

    clearOne() {

    }

    appendNum(num) {
      this.currOp = this.currOp.toString() + num.toString()
    }

    getComputedStyle(operator) {

    }

    calculate(){

    }

    updateDisplay(){
      this.currOp.innerText = this.currOp
    }

  }

//en vez de className, podemos usar un query:
const numBtn = document.querySelectorAll('[data-number]')
const operationBtn = document.querySelectorAll('[data-operator]')
//y estos aparecen una sola vez
const equalBtn = document.getElementById('total')
const clearBtn = document.getElementById('clean')
const backBtn = document.getElementById('back')
const historyBtn = document.getElementById('historyValue')
const resultBtn = document.getElementById('resultValue')
const prevOp = document.querySelector('[data-prev-op]')
const actualOp = document.querySelector('[data-actual-op]')

//si Calculator es una class... podemos hacer una instancia!
const calculator = new Calculator(prevOp, currOp)

numBtn.forEach(button => {
  button.addEventListener("click", ()=> {
    calculator.appendNum(button.innerText)
    calculator.updateDisplay()
  })
})