import { useState } from "react"

export const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React Counter</h1>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <span>Count: {count}</span>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  )
}
