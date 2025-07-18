import React ,  {useState}from 'react'

function App() {
   
  let [state, SetState]=useState(1);  // State declare  initally its 1 
   console.log(state);    // console log 
  return (
    <div>
      <h1 onClick={()=> SetState(state*10) }> {state}  </h1> 
    </div>//we can't directly change the state like this: state = 10 
    // Suppose we want to change the state — we should do it using SetState(10) instead of directly writing state = 10, because React doesn't allow direct state updates
    
  )
  
}

export default App
