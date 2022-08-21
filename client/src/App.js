import './App.css';
import axios from 'axios'
import React from 'react'

function App() {

const [data, setData] = React.useState('')
const [message, setMessage] = React.useState('')

const handleClick = () => {
  axios.post('/test/mock', {data}).then(res => setMessage(res.data))
}
  
  return (
    <div className="container">
      <div className="App">
        <h4 style={{height: '20px'}}>{message}</h4>
        <label for="story">Define your mock response here:</label>
        <textarea 
          id="input1" 
          name="input1" 
          rows="10" 
          cols="50"
          value={data}
          onChange={(e) => {
            setData(e.target.value)
            setMessage("")
          }}
        />
      <div>
        <button onClick={handleClick}>submit</button>
        <button onClick={() => {
          setData("")
          setMessage("")
        }}>
          reset
        </button>
      </div>
      </div>
  </div>
  );
}

export default App;