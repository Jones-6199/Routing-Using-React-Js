import { useContext } from "react"
import AppData from "./Provider"



export default function PopUp() {
    const value = useContext(AppData)
  return (
    <>
    <h1>{value}</h1>
    </>
  )
}
