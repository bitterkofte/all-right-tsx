import { Component } from 'react'

type ClassCompProps = {
  message: string
}
type ClassCompState = {
  count: number
}

/** The count value is 5 */
export class ClassComp extends Component<ClassCompProps, ClassCompState> {
  state = {
    count: 0
  }

  handleClick = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }))
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Increment</button>
        {this.props.message} {this.state.count}
      </div>
    )
  }
}