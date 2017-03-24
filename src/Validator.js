import React, { Component } from 'react';
import "./Validator.css";

class Validator extends Component {

  constructor(props){
    super()
    this.state = {
        email: '',
        password: '',
        confirmPassword: ''
    }
}

  handleEmail(e){
    this.setState({
      email: e.target.value
    })
  }
  handlePassword(e){
    this.setState({
    password: e.target.value
    })
}

  handleConfirmPassword(e){
    this.setState({
    confirmPassword: e.target.value
    })
  }

  handleSubmit(e){

    this.valid()
  }

  valid(){
    if (this.state.password !== this.state.confirmPassword) {
      this.setState({valid: false})
    }
    else {
      this.setState({valid: true})
    }
  }

  render() {
    let confirmation = this.state.valid ? "Valid" : "Passwords do not match"
    return (
      <div className="form">
        <h1>Sign Up</h1>
        <input type="text" onChange={(e) => this.handleEmail(e)} placeholder="email" />
        <input type="password" onChange={(e) => this.handlePassword(e)} placeholder="password" />
        <input type="password" onChange={(e) => this.handleConfirmPassword(e)} placeholder="confirm password" />
        <input type="submit" value="Submit"  onClick={(e)=> this.handleSubmit(e)}/>
        <p>{confirmation}</p>
      </div>
    );
  }
}


export default Validator;
