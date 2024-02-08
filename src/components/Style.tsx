import React from "react"

type StyleProps = {
  styles: React.CSSProperties
}

export const Style = ({styles}: StyleProps) => {
  return (
    <p style={styles}>Style</p>
  )
}