import { PersonProps } from "./Person.types"

export const Person = ({name}: PersonProps) => {
  return (
    <div>name: { name.first } { name.last }</div>
  )
}