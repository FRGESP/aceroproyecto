"use client"

function LoginForm() {
  return (
    <div>
        <form className='flex flex-col  w-lg gap-4' onSubmit={() => console.log('submit')}>
          <div className='flex flex-col gap-2'>
            <label htmlFor="user" className="font-semibold  text-2xl flex-grow text-left">Usuario</label>
            <input required className='border border-black rounded-xl w-full py-3 px-3 text-xl' type="text" placeholder='Ingrese su número de usuario' autoFocus/>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="user" className="font-semibold text-2xl flex-grow text-left">Contraseña</label>
            <input required className='border border-black rounded-xl w-full py-3 px-3 text-xl' type="text" placeholder='Ingrese su contraseña'/>
          </div>
          <button className='py-3 font-semibold text-xl text-white bg-acento hover:bg-acentohover hover:cursor-pointer rounded-3xl'>Ingresar</button>
        </form>
      </div>
  )
}

export default LoginForm