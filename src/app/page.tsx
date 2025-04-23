import LoginForm from "@/components/loginForm"
function Loginpage() {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-300 via-white'>
      <div className='w-52 h-auto mb-7'>
        <img src="/assets/login/logo.png" alt="logo"  />
      </div>
        <LoginForm />
        <div className="grid grid-cols-5 gap-12 mt-18 justify-center">
          <div className="w-26">
            <img src="/assets/login/llave-inglesa.png" alt="" />
          </div>
          <div className="w-26">
            <img src="/assets/login/martillo.png" alt="" />
          </div>
          <div className="w-26">
            <img src="/assets/login/tornillo.png" alt="" />
          </div>
          <div className="w-26">
            <img src="/assets/login/tubo.png" alt="" />
          </div>
          <div className="w-26">
            <img src="/assets/login/viga.png" alt="" />
          </div>
        </div>
    </div>
  )
}

export default Loginpage