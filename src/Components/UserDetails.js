import React from 'react'
import { useParams } from 'react-router-dom'

export default function UserDetails() {
  const {userId} = useParams();
  return (
    <>
    <h1>
        Users Details About {userId}
    </h1>
    </>
  )
}
