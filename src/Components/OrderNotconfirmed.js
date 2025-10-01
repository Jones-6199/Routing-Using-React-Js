import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function OrderNotconfirmed() {
    const navigate = useNavigate()
  return (
    <>
    <h1 style={{
        color:'red',
        textAlign:'center',
        marginTop:'20px'
    }}>Order Has Not Confirmed</h1>
    

    <button
    onClick={() => navigate(-1) }
    
    >Go Back</button>
    </>
  )
}
