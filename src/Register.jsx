import React ,{useState}from "react"
import { useDispatch , useSelector} from "react-redux"
import './App.css'

const Register = ()=>{

    const [Name,setName] = useState('')
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const dispatch =useDispatch()
    const users = useSelector(state=> state.users)

const register = ()=>{
    const payload = users.find(user=> user.username === username )

    if(payload){

alert('User Already Exist!')
    }else{
        dispatch({
            type: 'Register',
            payload : {
                id: (new Date).getTime(),
                Name , username,password
            }
        })
    }
   
}

    return(
        <form className="register-form">
            <h3>Register Here</h3>
            <input type="text" placeholder="Name" value={Name} onChange={e=>setName(e.target.value)} /><br/><br/>
            <input type="text" placeholder="Email"value={username} onChange={e=>setUsername(e.target.value)}/><br/><br/>
            <input type="password" placeholder="Password"value={password} onChange={e=>setPassword(e.target.value)}/><br/><br/>
            <input type="button" value='Register' onClick={register}/> <br/>
        </form>
    )
}
export default Register;