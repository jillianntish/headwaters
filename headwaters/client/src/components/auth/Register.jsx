import React, { Component } from 'react';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      password2: '',
    };
  }

  render() {
    return (
      <div className="form-container">
        <h1>
          Account <span className="text-primary">Register</span>
        </h1>
        <form>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input type="firstName" name="firstName" />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input type="lastName" name="lastName" />
          </div>
          <div>
            <label htmlFor="username">Username</label>
            <input type="username" name="username" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>
          <div className="form-group">
            <label htmlFor="password2">Confirm Password</label>
            <input type="password2" name="password2" />
          </div>
          <input type="submit" value="Register" />
        </form>
      </div>
    );
  }
}

export default Register;
