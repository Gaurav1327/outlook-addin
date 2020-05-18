import * as React from "react";
import Header from "./Header";
import Progress from "./Progress";
import Login from "./login";
import Main from "./main3";
/* global Button, Header, HeroList, HeroListItem, Progress */

export default class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      listItems: [],
      login: false,
      open: false,
    };
    this.loggedin = this.loggedin.bind(this);
  }

  componentDidMount() {
    this.setState({
      listItems: [
        {
          icon: "Ribbon",
          primaryText: "Achieve more with Office integration",
        },
        {
          icon: "Unlock",
          primaryText: "Unlock features and functionality",
        },
        {
          icon: "Design",
          primaryText: "Create and visualize like a pro",
        },
      ],
    });
    document.addEventListener("mousedown", this.handleClose, false);
  }

  loggedin = () => {
    this.setState({
      login: true,
    });
  };
  click = async () => {
    /**
     * Insert your Outlook code here
     */
    let inv = this.state.open;
    this.setState({
      open: !inv,
    });
  };
  render() {
    const { title, isOfficeInitialized } = this.props;

    if (!isOfficeInitialized) {
      return (
        <Progress
          title={title}
          logo="assets/logo-filled.png"
          message="Please sideload your addin to see app body."
        />
      );
    } else if (!this.state.login) {
      return (
        <Login
          login={this.loggedin}
          logo="assets/logo-filled.png"
          title={this.props.title}
          message="Welcome to Appointy for Outlook"
        />
      );
    }
    return (
      <div
        className="ms-welcome"
        style={{ marginTop: "40px", marginRight: "10px", marginLeft: "10px" }}
      >
        <hr
          style={{ width: "100%", marginRight: "0px", marginLeft: "0px" }}
        ></hr>
        <Main />
      </div>
    );
  }
}
