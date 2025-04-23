import LoginForm from "@/components/loginForm"
function Loginpage() {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-r from-gray-300 via-white'>
      <div className='w-44 h-auto mb-7'>
        <img src="/assets/login/logo.png" alt="logo"  />
      </div>
        <LoginForm />
    </div>
  )
}

export default Loginpage