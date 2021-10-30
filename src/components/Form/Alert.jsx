import { useState } from "react"

export default function Alert({ type, message, hide = false }) {
  const [hidden, setHidden] = useState(hide)

  let bgColor = "bg-blue-500"
  if (type === "success") {
    bgColor = "bg-green-500"
  } else if (type === "danger") {
    bgColor = "bg-red-500"
  }

  if (hidden) {
    return <></>
  }
  return (
    <div className={`flex items-center ${bgColor} justify-between text-white text-sm font-bold px-4 py-3`} role="alert">
      <p>{message}</p>
      <button type="button" onClick={() => setHidden(true)}>X</button>
    </div>
  )
}