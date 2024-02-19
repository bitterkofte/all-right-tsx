import { Login } from './Login'
import { ProfileProps } from './Profile'

type PrivateProps = {
  name: string,
  isLoggedIn: boolean
  component: React.ComponentType<ProfileProps>
}

export const Private = ({ name, isLoggedIn, component: Component }: PrivateProps) => {
  if (isLoggedIn) {
    return <Component name={name} />
  } else {
    return <Login />
  }
}