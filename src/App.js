import { useDispatch, useSelector } from 'react-redux';
import Register from './Register'
import { Login } from './login';
import './App.css';

function App() {
const dispatch= useDispatch()
  const users = useSelector(state=>state.users)
  const user = useSelector(state=>state.user)

  return (
    <div className="Home">
      <h1>REGISTER AND LOGIN USING REDUX STORE</h1>

     <div className='users'> 
     
     {
      
        users.map(user =><div key={user.id}>Name-{user.Name} : Email-{user.username}</div>)
      }
      </div>

      <div className='register'> <Register/></div>

    <div className='login'>
     {
      user
      ?<>
      <div className='users'> 
     
     {
      
        users.map(user =><div key={user.id}>Welcome {user.Name} !!!!! </div>)
      }
      </div><br/>
      <input type='button' value='Logout' onClick={()=>{
        dispatch({
          type : 'Logout'

        })
      }}/></>
      :<Login/>
     }

     </div>
    </div>
  );
}

export default App;
