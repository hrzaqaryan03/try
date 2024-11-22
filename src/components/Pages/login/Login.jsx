import React, { useContext, useState, useEffect } from 'react'
import { UserContext} from '../../../context/UserContext'

const Login = () => {

  const {login , user} = useContext(UserContext)

  const [name , setName] = useState("")
  const [pass , setPass] = useState("")
  const [error , setError] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    if(name === "valod" && pass === "123") {
      
      login({name})
      setName("")
      setPass("")
      setError("")
    
    }
    else {
      setError("invalid username or password")
      setName("")
      setPass("")
    }

  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">
          <span>Name</span>
        <input type="text" value={name} autoComplete='off' onChange={(e) => setName(e.target.value)} />
        </label>
        <label htmlFor="">
          <span>Password</span>
          <input type="password" value={pass} autoComplete='off' onChange={(e) => setPass(e.target.value)}/>
        </label>
        <input type="submit" value={"Login"}/>
      </form>
      {error && <p>{error}</p>}
    </div>
  )
}

export default Login