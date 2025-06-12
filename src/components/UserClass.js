import React from "react";

export class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount(){
    
  }

  render() {
    const { name, location } = this.props;
    const { count } = this.state;
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
        <h1>name : {name}</h1>
        <h2> I live in {location}</h2>
      </div>
    );
  }
}

import {useState} from "react"
export const User = (props) => {
const[count,setcount] = useState(0);
const[count2,setcount2] = useState(2);
	return (
			<div className="user-card">
				<h1>count : {count}</h1>
				<button onClick={() => setcount(count+1)}>Increase Count</button>
				<h1>count2 : {count2}</h1>
				<h1>Name : {props.name}</h1>
				<h2>Location : Palani</h2>
				<h3>Contact : @cartoonkirukkan</h3>
			</div>
	)
}