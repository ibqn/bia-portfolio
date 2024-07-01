import { useState } from "react"

export const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>React Counter</div>

      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  )
}
