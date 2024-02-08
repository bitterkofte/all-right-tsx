import { useState } from 'react'

type AuthUser = {
  name: string
  email: string
}

export const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null)
  // TYPE ASERTION
  // const [user, setUser] = useState<AuthUser>({} as AuthUser)
  const handleLogin = () => {
    setUser({
      name: 'Vishwas',
      email: 'vishwas@example.com'
    })
  }
  const handleLogout = () => setUser(null)
  // const handleLogout = () => 
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user?.name}</div>
      {/* <div>User name is {user.name}</div> */}
    </div>
  )
}