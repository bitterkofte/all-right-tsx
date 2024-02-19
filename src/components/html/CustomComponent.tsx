import React from 'react'
import { Greet } from '../props/Greet'

// assume that you cannot export GreetProps type, you can do this to copy the prop types
export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return <div>{props.name}</div>
}