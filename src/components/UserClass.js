import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const { name, location } = this?.props;
    const { count } = this?.state;
    return (
      <div>
        <h1> count : {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          add
        </button>
        <h2> I live in {location}</h2>
      </div>
    );
  }
}

export default UserClass;
