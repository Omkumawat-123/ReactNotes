import React ,{useState}from 'react'

function App() {
   
  let [state, SetState]=useState(1);  // State declare  initally its 1 
   console.log(state);    // console log 
  return (
    <div>
      <h1 onClick={()=> SetState(state*10) }> {state}  </h1> 
    </div>// we cant directly change the {state=10} like this  Suppose we have to change state we can change it using {Setstate(state=10)} like this 
    
  )
  
}

export default App
