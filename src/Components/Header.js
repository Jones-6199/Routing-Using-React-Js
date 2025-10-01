import React, { use } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Header() {
  const navigate = useNavigate()
  return (
    <>
    <div>Header</div>
  
  <button
  onClick={() => navigate(-1)}
  
  >Go Back</button>
  
  </>
  )
}
