export type ProfileProps = {
  name: string
}

export const Profile = ({ name }: ProfileProps) => {
  return <div style={{background: "gray", padding: 10}}>Profile: "{name}"</div>
}