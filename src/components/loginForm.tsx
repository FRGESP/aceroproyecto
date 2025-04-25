"use client"
import { useState, useEffect } from "react"
import { login } from "@/actions"
import { useRouter } from "next/navigation"

function LoginForm() {
    const [user, setUser] = useState({
        user: "",
        password: ""
    })
    const [error, setError] = useState(false)
    const router = useRouter()

    const handlechange = (e:any) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
        console.log(user);
    }

    const handleSubmit = async (e:any) => {
        e.preventDefault()
        const response = await login(user)
        console.log(response);
    }
    
  return (
    <div>
        <form className='flex flex-col  w-lg gap-4' onSubmit={handleSubmit}>
          <div className='flex flex-col gap-2'>
            <label htmlFor="user" className="font-semibold  text-2xl flex-grow text-left">Usuario</label>
            <input onChange={handlechange} name="user" required className='border border-black rounded-xl w-full py-3 px-3 text-xl' type="text" placeholder='Ingrese su número de usuario' autoFocus/>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="user" className="font-semibold text-2xl flex-grow text-left">Contraseña</label>
            <input onChange={handlechange} name="password" required className='border border-black rounded-xl w-full py-3 px-3 text-xl' type="text" placeholder='Ingrese su contraseña'/>
          </div>
          <button className='py-3 font-semibold text-xl text-white bg-acento hover:bg-acentohover hover:cursor-pointer rounded-3xl'>Ingresar</button>
        </form>
      </div>
  )
}

export default LoginForm