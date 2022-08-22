import './App.css';
import axios from 'axios'
import React from 'react'
import { v4 as uuidv4 } from 'uuid';

function App() {

const [data, setData] = React.useState('')
const [message, setMessage] = React.useState('')
const [id, setId] = React.useState(null)


const handleClick = () => {
  if(data){
    alert(`review: ${data}`)
    axios.post('/test/mock', {data, id}).then(res => setMessage(res.data))
  }else{
    setMessage("enter mock response")
  }
}

const deleteData = () => {
  axios.delete(`/test/${id}`).then(res => setMessage(res.data))
}

React.useEffect(() => {
  const id = uuidv4()
  setId(id)
},[])



  return (
    <div className="container">
      <h4 style={{height: '40px', textAlign: 'center'}}>{message}</h4>
      <div className="App">
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
          deleteData()
        }}>
          reset
        </button>
      </div>
      </div>
  </div>
  );
}

export default App;