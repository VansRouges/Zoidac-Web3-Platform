import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

export default function NotFound() {
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            navigate("/")
        }, 1500)
    })
  return (
    <>
      <h1 className="flex justify-center items-center text-5xl font-extrabold">Nothing here for now</h1>
    </>
  )
}
