import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Contact() {
    const navigate = useNavigate()
  return (
<div>
        <div>Contact</div>
    <button
    onClick={() => navigate('/')}
    >Go BAck</button>
</div>  )
}
