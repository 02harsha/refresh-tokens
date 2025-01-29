import { useState } from 'react' 
import { api }  from "./interceptos/Interceptors"

function Login(){
    const [user,setuser]=useState({username:null,password:null})
  

  const handleSubmit=async(event)=>{
    event.preventDefault()
    
    const response=await api.post('http://localhost:3000/login',user)
    localStorage.setItem('refresh',response.data.refresh_Token)
    localStorage.setItem('access',response.data.access_Token)
  }
  const handleUsername=(event)=>{
    setuser({...user,username:event.target.value})
  }
  const handlePassword=(event)=>{
    setuser({...user,password:event.target.value})
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='enter name' name='username' onChange={handleUsername} />
      <input type="password"  placeholder='enter password' name='password' onChange={handlePassword}/>
      <button type='submit' >Login</button>
    </form>
    </>)
}
export default Login