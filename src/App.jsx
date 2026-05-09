import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [value, setvalue] = useState('')

  const setting = (e) => {
    return setvalue(value + e.target.value)
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Numbers
      if (e.key >= '0' && e.key <= '9') {
        setvalue(prev => prev + e.key)
      }
      // Operators
      else if (['+', '-', '*', '/'].includes(e.key)) {
        setvalue(prev => prev + e.key)
      }
      // Decimal point
      else if (e.key === '.') {
        setvalue(prev => prev + '.')
      }
      // Enter for equals
      else if (e.key === 'Enter') {
        e.preventDefault()
        setvalue(prev => eval(prev))
      }
      // Backspace for delete
      else if (e.key === 'Backspace') {
        e.preventDefault()
        setvalue(prev => prev.slice(0, prev.length - 1))
      }
      // Escape for clear
      else if (e.key === 'Escape') {
        setvalue('')
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
      <div className="container" >
        <div className="calculator" >
          <form action="" >
            <div className='text'>
              <input type="text" value={value} />
            </div>
            <div>
              <input type="button" value="AC" onClick={()=> { setvalue('')}} />
              <input type="button" value="DE" onClick={()=> { setvalue(value.slice(0,value.length-1))}} />
              <input type="button" value="." onClick={setting} />
              <input type="button" value="/" onClick={setting} />
            </div>
            <div>
              <input type="button" value="7" onClick={setting} />
              <input type="button" value="8" onClick={setting} />
              <input type="button" value="9" onClick={setting} />
              <input type="button" value="*" onClick={setting} />
            </div>
            <div>
              <input type="button" value="4" onClick={setting} />
              <input type="button" value="5" onClick={setting} />
              <input type="button" value="6" onClick={setting} />
              <input type="button" value="+" onClick={setting} />
            </div>
            <div>
              <input type="button" value="1" onClick={setting} />
              <input type="button" value="2" onClick={setting} />
              <input type="button" value="3" onClick={setting} />
              <input type="button" value="-" onClick={setting} />
            </div>
            <div>
              <input type="button" value="00" onClick={setting} />
              <input type="button" value="0" onClick={setting} />
              <input type="button" value="=" className='equal' onClick={()=> { setvalue(eval(value))}} />
            </div>
          </form>
        </div>
      </div>
  )
}

export default App
