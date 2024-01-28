import React from "react";
import Basic from "./Basic";

//Class based component
class Welcome extends React.Component {
  render() {
    return <h1>This is a class based component</h1>;
  }
}
//functional component
function WelcomeNew(props) {
  console.log(props);
  return <h1>This is a functional component{props.name}</h1>;
}

//2nd example of class Based Component

class ClassBased extends React.Component {
  render() {
    return (
      <div style={{ color: "red" }}>
        <p>This is 2nd Example of Class Based Component</p>
        <h5>Now Check that method and practice more</h5>
      </div>
    );
  }
}

//functions and class based component both have some additional features

const user = {
  firstName: "Ankit",
  lastName: "Gupta",
};

function fullName(user) {
  if (user) {
    return user.firstName + " " + user.lastName;
  }
  return <h1>Hello, Stranger</h1>;
}

function App() {
  const element = (
    <h2 className="greeting">This is JSX object Representative method</h2>
  );
  //same like this above code
  //if you use createElement method then it gives free bug code
  const elementNew = React.createElement(
    "h1",
    { className: "greeting" },
    "Hello New JSX method"
  );

  //same code written like this from two identical above code
  //React create with Objects
  //   const elementWithObject = {
  //     type: "h1",
  //     props: {
  //       className: "greeting",
  //       children: "This is a elementWithObjects Method",
  //     },
  //   };

  //function for tick method
  const elementTick = (
    <div>
      <h1>This is a new update method</h1>
      <h2>It is {new Date().toLocaleTimeString}.</h2>
    </div>
  );

  //Clock functional component-> This is also not working
  function Clock(props) {
    return (
      <div>
        <h1>This is a Clock component</h1>
        <h2>The new data is {props.date.toLocaleDateString()}</h2>
      </div>
    );
  }

  //Convert Functional Component to class Component

  //In this section, we will learn how to make the Clock component truly
  //resuable and Encapsulated.It will set up its own timer and update itself every second.but the below code is not working

  //How to correct this code ->🧒
  //Adding local state to a class
  //Note->😁
  //We will move date from props to state in three steps-:
  //1-> Replace this.props.date with this.state.date in this render method
  //2->Add a class constructor that assigns the initial this.state
  //3-> Remove the date prop from Clock component
  class ClockNew extends React.Component {
    constructor(props) {
      super(props);
      this.state = { date: new Date() };
    }
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }

  function updateClock() {
    return <Clock />;
  }

  //Adding Lifecycle Methods to a Class
  //😒-> In applications with many components,It is very important to free up resources taken by the component when they are destroyed.

  //Question-> We want set up a timer whenever the Clock is rendered to the DOM for the first time? This is a called "Mounting" in React.❤️

  //Question->We want also clear that timer whenever the DOM produced by the Clock is removed?This is called "Unmounting" in React.❤️

  //😍😍 We can declare special methods on the component class to run some code when the components mounts and unmounts👌

  class MountUnmount extends React.Component {
    constructor(props) {
      super(props);
      this.state = { date: new Date() };
    }
    componentDidMount() {}
    componentWillUnmount() {}
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  //This is above code method is called lifecycle method.👍🕰️

  //Note-> The componentDidMount() method runs after the component output has been rendered to the DOM.
  //Example-> This is good place to set up a timer.
  //componentDidMount(){
  //   this.timerID=setInterval(
  //     ()=>this.tick(),1000
  //   )
  // }

  //Note how we save the timer ID right on this (this.timerID).
  //While this.props is set by react itself and this.state has a special meaning,you are free to add additional field to the class manually if you need to store something that does'nt participate in the data flow (like a timer ID)

  //😒 We will tear down to the timer in the componentWillUnmount lifecycle method.
  // //componentWillUnmount(){
  //   clearInterval(this.timerID)
  // }

  //Finally we, will implement a method called tick() that the Clock component will run every second.

  //It will use this.state to schedule updates to the component local state.

  //Example->
  class NewClock extends React.Component {
    constructor(props) {
      super(props);
      this.state = { date: new Date() };
    }
    componentDidMount() {
      this.timerID = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
    tick() {
      this.setState({
        date: new Date(),
      });
    }
    render() {
      return (
        <div>
          <h1>This is a Lifecycle Method</h1>
          <h2>This is a {this.state.date.toLocaleTimeString()}</h2>
        </div>
      );
    }
  }

  //Handling Events

  class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = { isToggle: true };
      //This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      this.setState((prevState) => ({ isToggle: !prevState.isToggle }));
    }
    render() {
      return (
        <div>
          <h1>This is handler event</h1>
          <button onClick={this.handleClick}>
            {this.state.isToggle ? "ON" : "OF"}
          </button>
        </div>
      );
    }
  }

  //If you calling binds annoys you, there are two ways you can get arround this.
  class LoggingButton extends React.Component {
    //This syntax ensures `this` is bound within handleClick
    handleClick() {
      console.log("this is:", this);
    }
    render() {
      return (
        <div>
          <button onClick={() => this.handleClick()}>Click Me</button>
        </div>
      );
    }
  }

  //conditional Rendering
  function WelcomeGreeting() {
    return <h1>Welcome Back!</h1>;
  }

  function SignGreeting() {
    return <h1>Please Sign Up!</h1>;
  }

  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <WelcomeGreeting />;
    }
    return <SignGreeting />;
  }

  //Example-with Conditional Rendering

  function LoginButton(props) {
    return <button onClick={props.handleLoginClick}>Login</button>;
  }

  function LogoutButton(props) {
    return <button onClick={props.handleLogoutClick}>Logout</button>;
  }

  //use with lifecycle method

  class LoginControl extends React.Component {
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind();
      this.handleLogoutClick = this.handleLogoutClick.bind();
      this.state = { isLoggedIn: false };
    }
    handleLoginClick() {
      this.setState({ isLoggedIn: true });
    }
    handleLogoutClick() {
      this.setState({ isLoggedIn: false });
    }
    render() {
      const isLoggedIn = this.state.isLoggedIn;
      let button;
      if (isLoggedIn) {
        button = <LoggingButton onClick={this.handleLoginClick} />;
      } else {
        button = <LogoutButton onClick={this.handleLogoutClick} />;
      }
      return <div>{button}</div>;
    }
  }

  let interval = setInterval(updateClock, 1000);
  return (
    <>
      <h1>Hello,{fullName(user)}</h1>
      {element}
      {elementNew}
      {elementTick}
      <Welcome />
      <ClassBased />
      <WelcomeNew name="Ankit" />
      <ClockNew />
      {interval}
      <NewClock />
      <Toggle />
      <LoggingButton />
      <Greeting isLoggedIn={false} />
      <LoginControl />
    </>
  );
}

export default App;
