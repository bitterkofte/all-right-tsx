import { Name } from "./Person.types"

type PersonListProps = {
  // names: {
  //   first: string
  //   last: string
  // }[]
  names: Name[]
}

export const PersonList = ({names}: PersonListProps) => {
  return (
    <div>
      {names.map(p => (
        <h2 key={p.first}>{ p.first } { p.last }</h2>
      ))}
    </div>
  )
}