import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function OrderConfirmation() {
    const navigate = useNavigate()
  return (
    <>
    <h1
    style={{
        color:'green',
        textAlign:'center',
        marginTop:'20px'
    }}>Order Placed Successfully</h1>

    <button
    onClick={() => navigate(-1)}
    >Go Back</button>
    </>
  )
}
