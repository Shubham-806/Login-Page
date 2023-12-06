import React,{useState} from 'react'

function Login(props) {
const   [email, setEmail]=useState('');
const   [pass, setPass]=useState('');

const handleSubmit=(e)=>
{
    e.preventDefault();
    console.log(email);
}
  return (
    <div className='container'>
    <h2>Login</h2>
     <form className="login-form"onSubmit={handleSubmit}>
     <label htmlfor="Email">Email</label>
     <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" id="Email"  placeholder="Youremail@gmail.com"name="Email"/>
     <label htmlfor="pass">Password</label>
     <input value={pass} onChange={(e)=>setPass(e.target.value)}type="Pass" id="Password" placeholder="*******" name="Password"/>
     <button>Log In</button>
     </form>
     <button  className="link-btn"onClick={()=>props.onFormSwitch('register')}>Don't have an Account, Register here</button>
    </div>
  )
}

export default Login
