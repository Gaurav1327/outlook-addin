import * as React from "react";
import Button from "@material-ui/core/Button";
import { LoginStyle } from "../styles/loginstyle";
import LockOpenIcon from "@material-ui/icons/LockOpen";
let dialog;
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props;
    this.messageHandler = this.messageHandler.bind(this);
    this.eventHandler = this.eventHandler.bind(this);
    this.ProcessChildMessage = this.ProcessChildMessage.bind(this);
    this.openDialog = this.openDialog.bind(this);
    this.errorHandler = this.errorHandler.bind(this);
    this.dialogCallback = this.dialogCallback.bind(this);
  }
  messageHandler = (arg) => {
    console.log("message received");
    this.props.login();
    dialog.close();
    console.log(arg.message);
  };

  eventHandler = (arg) => {
    console.log(arg.error);
    // In addition to general system errors, there are 2 specific errors
    // and one event that you can handle individually.
    switch (arg.error) {
      case 12002:
        console.log("Cannot load URL, no such page or bad URL syntax.");
        break;
      case 12003:
        console.log("HTTPS is required.");
        break;
      case 12006:
        // The dialog was closed, typically because the user the pressed X button.
        console.log("Dialog closed by user");
        break;
      default:
        console.log("Undefined error in dialog window");
        break;
    }
  };

  ProcessChildMessage = (message) => {
    // do something with the message
    console.log(message);
  };
  errorHandler = (error) => {
    this.showNotification(error);
  };

  dialogCallback(asyncResult) {
    if (asyncResult.status == "failed") {
      console.log("asyncResult.statusfailed");
      // In addition to general system errors, there are 3 specific errors for
      // displayDialogAsync that you can handle individually.
      switch (asyncResult.error.code) {
        case 12004:
          console.log("Domain is not trusted");
          break;
        case 12005:
          console.log("HTTPS is required");
          break;
        case 12007:
          dialog.close();
          console.log("A dialog is already opened.");
          break;
        default:
          console.log(asyncResult.error.message);
          break;
      }
    } else {
      console.log("statusreceived");
      dialog = asyncResult.value;
      /*Messages are sent by developers programatically from the dialog using office.context.ui.messageParent(...)*/
      dialog.addEventHandler(
        Office.EventType.DialogMessageReceived,
        this.messageHandler
      );
      /*Events are sent by the platform in response to user actions or errors. For example, the dialog is closed via the 'x' button*/
      dialog.addEventHandler(
        Office.EventType.DialogEventReceived,
        this.eventHandler
      );
    }
  }
  openDialog = () => {
    console.log(this.state.message);
    Office.context.ui.displayDialogAsync(
      "https://localhost:3000/src/auth/auth.html ",
      { height: 50, width: 50, promptBeforeOpen: false },
      this.dialogCallback
    );
  };
  render() {
    const { title, logo, message } = this.props;
    return (
      <LoginStyle>
        <img width="60" height="60" src={logo} alt={title} title={title} />
        <h2 className="heading ms-fontWeight-light ms-fontColor-neutralPrimary">
          {message}
        </h2>
        <p>Get the power of Appointy from your inbox.</p>
        <p>
          Want customers to skip service/staff selection while booking? Generate
          a link with pre-selected details
        </p>
        <Button
          className="login"
          variant="contained"
          color="primary"
          startIcon={<LockOpenIcon />}
          onClick={this.openDialog}
        >
          Login
        </Button>
        <p style={{ fontSize: "10px" }}>
          Don't have an account?{" "}
          <a
            href="https://appointy.com"
            style={{ textDecoration: "none", color: "#476ce4" }}
          >
            Sign up for free.
          </a>
        </p>
      </LoginStyle>
    );
  }
}
