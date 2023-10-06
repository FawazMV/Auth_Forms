import { useNavigate } from "react-router-dom"

const HomePage = () => {

  const navigate = useNavigate()
  const logout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }
  return (
    <div className='grid place-content-center  w-full h-full bg-slate-500'>
      <h1 className="text-3xl font-bold"> HomePage</h1>
      <button className="text-right text-[16px] p-1 text-blue-900 opacity-70" onClick={logout}>Logout</button>
    </div>
  )
}

export default HomePage



