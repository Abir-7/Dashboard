import { useState } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom"
import './App.css'

function App() {

  const [isActive,setIsActive]=useState(false)

  return (
    <div className="container">
    <div className="btn" onClick={()=>{
      console.log('ll')
      setIsActive(!isActive)}}>
X
</div>
<div className={isActive?"sideNavContainer active":'sideNavContainer'}>
  <div className="sideNavLink">
     <Link className="link" to={'/dashboard/overview'}>Dashboard</Link>
     <Link className="link" to={'/dashboard/supplies'}>Supplies</Link>
     <Link className="link" to={'/dashboard/create-supply'}>Create Supply</Link>
     <Link className="link" to={'/dashboard/leaderboard'}>Leaderboard</Link>
     <Link className="link" to={'/dashboard/create-testimonial'}>Testimonial</Link>
  </div>
</div>
<div className="mainContain" onClick={isActive?()=>setIsActive(!isActive):()=>null}>
  
<Outlet />

</div>
</div>
  )
}

export default App
