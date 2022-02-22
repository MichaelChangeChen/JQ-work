import { Component } from 'react'
//原形  import React from 'react'
// class CC extends React.Component{}


class CC extends Component {
  //建構式
  constructor() {
    super()
    //super()  是呼叫父母類別(Component)建構式
    this.state = { total: 0 }
  }

  render() {
    return (
      <>
        <h1
          onClick={() => {
            this.setState({ total: this.state.total + 1 })
          }}
        >
          {this.state.total}
        </h1>
      </>
    )
  }
}

export default CC
