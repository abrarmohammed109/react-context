import {useContext} from 'react'
import { DataContext } from '../App'



export default function ComponentC (){
    const data = useContext(DataContext)
    return(
        <div>
            {/* only render the below h3 tag when the user is logged in  */}
            {data.setLoggedIn ? <h3>the user is {data.userName}</h3> : ''}            
            <button onClick={()=> data.setLoggedIn(true)}>Log In</button>
        </div>
    )
}


