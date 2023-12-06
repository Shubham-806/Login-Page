import React,{useState} from 'react'

function Register(props) {
const   [email, setEmail]=useState('');
const   [pass, setPass]=useState('');
const   [name, setName]=useState('');
const handleSubmit=(e)=>
{
    e.preventDefault();
    console.log(email);
}
  return (
    <div className='container'>
    <h2>Register</h2>
     <form className="register-form" onSubmit={handleSubmit}>
     <label htmlfor="Email">Email</label>
     <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" id="Email"  placeholder="Youremail@gmail.com"name="Email"/>
     <label htmlfor="pass">Password</label>
     <input value={pass} onChange={(e)=>setPass(e.target.value)}type="Pass" id="Password" placeholder="*******" name="Password"/>
     <label htmlfor="Name">Name</label>
     <input value={name} onChange={(e)=>setName(e.target.value)} type="text" id="Name"  placeholder="Your Name" name="Name"/>
     <button>Log In</button>
     </form>
     <button className="link-btn" onClick={()=>props.onFormSwitch('login')}>Already have an Account, Login here</button>
    </div>
  )
}

export default Register
