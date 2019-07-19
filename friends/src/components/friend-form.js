import React from "react";

import Label from "./label";
import Input from "./input";

export default class FriendForm extends React.Component {
  state = {
    name: this.props.name,
    age: this.props.age,
    email: this.props.email
  };

  static defaultProps = {
    name: "",
    age: 18,
    email: "",
    submitText: "Create Friend"
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { name, age, email } = this.state;

    this.props
      .onSubmit({ name, age, email })
      .then(() => {
        this.props.history.push("/friends");
      })
      .catch(err => {
        console.error(err);
      });
  };

  render() {
    return (
      <div className="flex flex-col items-center mt-6">
        {this.props.errorMessage && (
          <p style={{ color: "red" }}>{this.props.errorMessage}</p>
        )}
        <form
          className="w-64 flex flex-col bg-white p-6 rounded shadow-lg"
          onSubmit={this.handleSubmit}
        >
          <Label color="text-gray-800" htmlFor="name">
            Name:
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="Enter a name..."
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
          <br />
          <Label color="text-gray-800" htmlFor="age">
            Age:
          </Label>
          <Input
            id="age"
            name="age"
            placeholder="Enter an age..."
            type="number"
            min="18"
            max="100"
            value={this.state.age}
            onChange={this.handleChange}
            required
          />
          <br />
          <Label color="text-gray-800" htmlFor="email">
            Email:
          </Label>
          <Input
            id="email"
            name="email"
            placeholder="Enter an email..."
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <br />
          {this.props.isLoading ? (
            <p>{this.props.loadingText}</p>
          ) : (
            <button
              className="rounded bg-green-500 font-semibold p-3 text-white hover:bg-green-700 shadow"
              type="submit"
            >
              {this.props.submitText}
            </button>
          )}
        </form>
      </div>
    );
  }
}
