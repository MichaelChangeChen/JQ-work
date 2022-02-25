import React, { Component } from 'react'

class CCForm extends Component {
  constructor() {
    super()
    this.state = { fullname: '', phone: '' }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    return (
      <>
        <h2>文字輸入框</h2>
        <label>姓名</label>
        <input
          type="text"
          value={this.state.fullname}
          name="fullname"
          onChange={this.handleChange}
        />
        <br />
        <label>電話</label>
        <input
          type="text"
          value={this.state.phone}
          name="phone"
          onChange={this.handleChange}
        />
      </>
    )
  }
}

export default CCForm
