import React from 'react'

function FileA() {
    const [count,setCount]=React.useState(14)
    // const[decrement,setDecrement]=React.useState(-14)

    return (
        <div className="app">
             <h1>counter</h1>
            <button onClick={()=>setCount(count-14)}>-</button>
            <p>{count}</p>
            <button onClick={()=>setCount(count*3)}>+</button>
        </div>
    )
}
export default FileA;
