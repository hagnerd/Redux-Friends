import React from "react";

export default class FriendForm extends React.Component {
  state = {
    name: this.props.name,
    age: this.props.age,
    email: this.props.email
  };

  static defaultProps = {
    name: "",
    age: 18,
    email: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { name, age, email } = this.state;

    this.props.onSubmit({ name, age, email });

    this.props.history.push("/friends");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          placeholder="Enter a name..."
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
          required
        />
        <br />
        <label htmlFor="age">Age:</label>
        <input
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
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          placeholder="Enter an email..."
          type="email"
          value={this.state.email}
          onChange={this.handleChange}
          required
        />
        <br />
        <button type="submit">Create Friend</button>
      </form>
    );
  }
}
