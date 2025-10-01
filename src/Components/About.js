import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function About() {
    const navigate = useNavigate()
  return (
    <>
    
    <div>
        About
    </div>
  
  <button 
  
  onClick={() => navigate('/OrderNotconfirmed')}
  >Other Orders</button>
  
  <button
  onClick={() => navigate(-1)}
  >Go Back</button>
  
  </>

  
  
  )


}
