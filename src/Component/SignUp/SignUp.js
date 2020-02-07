import React, { Component } from "react";
import Input from "../InputForm";
import firebase from "../../Config/Config";
import { withRouter } from "react-router-dom";
import { Flex, Box, Text } from "rebass";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    error: null,
    loggedIn: false
  };
  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleLogin = event => {
    event.preventDefault();
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        this.props.history.push("/search");
      })
      .catch(error => {
        this.setState({ error: error });
      });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
        this.setState({ loggedIn: true });
        this.props.history.push("/search");
      })
      .catch(error => {
        this.setState({ error: error });
      });
  };

  render() {
    return (
      <div>
        <div className="d-flex justify-content-center flex-column mt-4">
          <h1 style={{ color: "white" }}>New User / Login</h1>
          <Input
            Emailvalue={this.state.email}
            passwordValue={this.state.password}
            submit={this.handleSubmit}
            login={this.handleLogin}
            changed={this.handleInputChange}
          />
        </div>
        <div style={{ marginLeft: "577px", color: "red" }}>
          {" "}
          {this.state.error ? (
            <Flex>
              <Box>
                <Text>*{this.state.error.message}</Text>
              </Box>
            </Flex>
          ) : null}
        </div>
      </div>
    );
  }
}

export default withRouter(SignUp);
