type TitleTypes = {
  txt: string
}

export const Title = ({txt}: TitleTypes) => {
  return (
    <h1 style={{
      fontSize: 30,
      textAlign: "center",
      color: "#007848"
    }}>{ txt }</h1>
  )
}