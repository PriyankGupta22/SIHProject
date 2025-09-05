import './Login.css'
import { useState } from 'react'
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
    <h1>Login</h1>
    <input 
      type='text'
      placeholder='Username'
      value={userName}
      onChange={changeUsername}
      />
      <input
      type='text'
      placeholder='Password'
      value={password}
      onChange={changePassword}
      />
      <br/>
      <button 
      type='submit'
      >Login</button>
      </form>
    </div>
  )
}

export default Login
