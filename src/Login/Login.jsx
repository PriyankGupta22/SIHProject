import './Login.css'
import { useState } from 'react'
import user from '../assets/user.svg'
import pass from '../assets/pass.svg'
function Login() {
    const [userName,setuserName] = useState('')
    const [password,setpassword] = useState('')
    function changeUsername (e) {
        setuserName(e.target.value)
    }
    function changePassword (e) {
        setpassword(e.target.value)
    }
    function handleSubmit(e) {
        setuserName('')
        setpassword('')
    }
  return (
    <div className="Logindiv">
    <form className="Loginform" onSubmit={handleSubmit}>
    <div className='headingLogin'>
        <h1>Login</h1>
    </div>
    <div className='textboxUser'>
     <div className='icon'>
        <img src={user} alt='username'/>
     </div>
     <input 
      type='text'
      placeholder='Username'
      value={userName}
      onChange={changeUsername}
      />
      </div>
      <div>
    <div className='textboxUser'>
     <div className='icon'>
        <img src={pass} alt='password'/>
     </div>
        <input
      type='text'
      placeholder='Password'
      value={password}
      onChange={changePassword}
      />
      </div>
      </div>
      <br/>
      <button 
      type='submit'
      >Login</button>
      </form>
    </div>
  )
}

export default Login
