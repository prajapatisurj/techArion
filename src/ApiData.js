import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import axios from 'axios'
function ApiData() {
    const [data, setData] = React.useState('')

   const fetchData=()=>{
       axios.get("https://gorest.co.in/public/v1/todos")
       .then((res)=>{
           console.log(res);
           setData(res.data);
       })
       .catch((err)=>{
           console.log(err);
       })
   }

    useEffect(() => {
        fetchData();
    },[])
    return (
         <div>
            {data.map((product)=>{
                <h1>{product.data}</h1>
            })}
         </div>
            
    )
}
export default ApiData
