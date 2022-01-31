import './App.css'
import { useState } from 'react'

function App() {
  const [temp1, setTemp1] = useState('')
  const [temp2, setTemp2] = useState('')
  const [plus, setPlus] = useState(false)
  const [min, setMin] = useState(false)
  const [divide, setDivide] = useState(false)
  const [multi, setMulti] = useState(false)
  const [tempCheck, setTempCheck] = useState(false)

  const getNumber = (e) => {
    if (!tempCheck) {
      let tempValue = e.target.innerText
      setTemp1(temp1 + tempValue)
    } else {
      let tempValue = e.target.innerText
      setTemp2(temp2 + tempValue)
    }
  }

  const plusMethod = () => {
    temp2 && setTemp1(temp2)
    temp2 && setTemp2('')
    setTempCheck(true)
    setPlus(true)
  }

  const minMethod = () => {
    temp2 && setTemp1(temp2)
    temp2 && setTemp2('')
    setTempCheck(true)
    setMin(true)
  }

  const divideMethod = () => {
    temp2 && setTemp1(temp2)
    temp2 && setTemp2('')
    setTempCheck(true)
    setDivide(true)
  }

  const multiMethod = () => {
    temp2 && setTemp1(temp2)
    temp2 && setTemp2('')
    setTempCheck(true)
    setMulti(true)
  }

  const result = () => {
    plus && setTemp2(+temp1 + +temp2)
    min && setTemp2(+temp1 - +temp2)
    multi && setTemp2(+temp1 * +temp2)
    divide && setTemp2(+temp1 / +temp2)
    setPlus(false)
    setMin(false)
    setMulti(false)
    setDivide(false)
    setTemp1('')
    setTempCheck(false)
  }

  const cleanMethod = () => {
    setTemp1('')
    setTemp2('')
    setTempCheck(false)
  }

  return (
    <div className="App">
      <div id="calculator">
        <div id="input-wrap">
          <div id="tmp">{temp1}</div>
          <div id="input">{temp2}</div>
        </div>
        <div id="button-wrap">
          <button onClick={cleanMethod} id="all-clear">
            AC
          </button>
          <button onClick={cleanMethod} id="clear">
            C
          </button>
          <button id="sign">+/-</button>
          <button onClick={divideMethod} class="amt divide">
            /
          </button>

          <button onClick={getNumber} class="number">
            7
          </button>
          <button onClick={getNumber} class="number">
            8
          </button>
          <button onClick={getNumber} class="number">
            9
          </button>
          <button onClick={multiMethod} class="amt times">
            *
          </button>

          <button onClick={getNumber} class="number">
            4
          </button>
          <button onClick={getNumber} class="number">
            5
          </button>
          <button onClick={getNumber} class="number">
            6
          </button>
          <button onClick={minMethod} class="amt minus">
            -
          </button>

          <button onClick={getNumber} class="number">
            1
          </button>
          <button onClick={getNumber} class="number">
            2
          </button>
          <button onClick={getNumber} class="number">
            3
          </button>
          <button onClick={plusMethod} class="amt plus">
            +
          </button>

          <button onClick={getNumber} class="number num-0">
            0
          </button>
          <button id="dot">.</button>
          <button onClick={result} id="result">
            =
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
