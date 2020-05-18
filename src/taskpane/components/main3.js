import * as React from "react";
import "date-fns";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { MainUI } from "../styles/new";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Button from "@material-ui/core/Button";
import Service from "./service";
import Staff from "./staff";
import Summary from "./summary";

const services = [
  { id: "service1", value: "chocolate" },
  { id: "service2", value: "strawberry" },
  { id: "service3", value: "vanilla" },
];
const staffs = [
  { id: "staff1", value: "chocolate" },
  { id: "staff2", value: "strawberry" },
  { id: "staff3", value: "vanilla" },
];
const times = [
  { id: "9:00 am", value: "9:00 am" },
  { id: "9:30 am", value: "9:30 am" },
  { id: "10:00 am", value: "10:00 am" },
  { id: "10:30 am", value: "10:30 am" },
];
let one =
  '<div style="width: 100%"><hr></div><div style="margin:0; padding:0; width:82px"><a href="';
let two =
  '" class="x_spot" style="display:block; font-family:Arial,sans-serif; font-size:13px; text-align:center; padding-top:10px; padding-bottom:10px; text-decoration:none; color:#476ce4; border:1px solid #476ce4;">Book</a></div><p style="font-size: 10px, margin-top:15px"><span style="color: #a3a2a2">Powered By </span><a href="https://appointy.com">Appointy</a></p></div>';
let head =
  "Want customers to skip service/staff selection while booking? Generate a link with pre-selected details";
let baseurl = "https://dev-booking.appointy.com/rahul55";
export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      date: [],
      staff: [],
      service: [],
      time: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handlestaff = this.handlestaff.bind(this);
    this.handleservice = this.handleservice.bind(this);
    this.handletime = this.handletime.bind(this);
    this.changepanel = this.changepanel.bind(this);
    this.clear = this.clear.bind(this);
    this.addmail = this.addmail.bind(this);
    this.makeurl= this.makeurl.bind(this);
  }
  clear = () => {
    this.setState({
      date: [],
    });
  };

  makeurl = () =>{
    let query = "",url;
    const {service, staff,date,time} = this.state;
    if(service.length)query+="ser="+service[0];
    if(staff.length)query+="&staff="+staff[0];
    if(date.length)query+="&date="+date[0].getDate()+"-"+(date[0].getMonth()+1)+"-"+date[0].getFullYear() ;
    if(time.length)query+="&time="+time[0];
    if(query!=="")
    {
        url= baseurl+"?"+query;
    }
    else
    {
        url= baseurl;
    }
    return url;
  }
  addmail = async () => {
    let item = Office.context.mailbox.item;
    
    let message = one + this.makeurl() + two;
    item.body.getTypeAsync(function (result) {
      if (result.status == Office.AsyncResultStatus.Failed) {
        document.getElementById("message").innerText += result.error.message;
      } else {
        // Successfully got the type of item body.
        // Set data of the appropriate type in body.
        // Body is of HTML type.
        // Specify HTML in the coercionType parameter
        // of setSelectedDataAsync.
        item.body.setSelectedDataAsync(
          message,
          {
            coercionType: Office.CoercionType.Html,
            asyncContext: { var3: 1, var4: 2 },
          },
          function (asyncResult) {
            if (asyncResult.status == Office.AsyncResultStatus.Failed) {
              document.getElementById("message").innerText +=
                asyncResult.error.message;
            }
            else{
              document.getElementById("message").innerText +=this.state.url;
            }
          }
        );
      }
    });
  };
  changepanel = () => {
    let panel = this.state.expanded;
    if (panel === "panel1") {
      this.setState({
        expanded: "panel2",
      });
    }

    if (panel === "panel2") {
      this.setState({
        expanded: "panel3",
      });
    }

    if (panel === "panel3") {
      this.setState({
        expanded: "panel4",
      });
    }

    if (panel === "panel4") {
      this.setState({
        expanded: false,
      });
    }
  };

  handleChange = (panel) => (event, isExpanded) => {
    this.setState({
      expanded: isExpanded ? panel : false,
    });
  };
  onChange = (value) => {
    let currentIndex = this.state.date.indexOf(value);
    let newdate = [];

    if (currentIndex === -1) {
      newdate.push(value);
    } else {
      newdate.splice(currentIndex, 1);
    }
    this.setState({
      date: newdate,
    });
    this.changepanel();
  };
  handlestaff = (value) => () => {
    let currentIndex = this.state.staff.indexOf(value);
    let newstaff = [];

    if (currentIndex === -1) {
      newstaff.push(value);
    } else {
      newstaff.splice(currentIndex, 1);
    }
    this.setState({
      staff: newstaff,
    });

    if (newstaff.length > 0) this.changepanel();
  };

  handletime = (value) => () => {
    let currentIndex = this.state.time.indexOf(value);
    let newtime = [];

    if (currentIndex === -1) {
      newtime.push(value);
    } else {
      newtime.splice(currentIndex, 1);
    }
    this.setState({
      time: newtime,
    });
    this.changepanel();
  };
  handleservice = (value) => () => {
    let currentIndex = this.state.service.indexOf(value);
    let newservice = [];

    if (currentIndex === -1) {
      newservice.push(value);
    } else {
      newservice.splice(currentIndex, 1);
    }
    this.setState({
      service: newservice,
    });

    if (newservice.length > 0) this.changepanel();
  };
  render() {
    const { expanded, date, service, staff, time } = this.state;
    return (
      <div>
        <p style={{ textAlign: "center" }}>{head}</p>
        <MainUI>
          <ExpansionPanel
            className="panel"
            expanded={expanded === "panel1"}
            onChange={this.handleChange("panel1")}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <h4>Select Service</h4>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Service
                handle={this.handleservice}
                service={this.state.service}
                list={services}
              />
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            className="panel"
            expanded={expanded === "panel2"}
            onChange={this.handleChange("panel2")}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <h4>Select Staff</h4>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails
              style={
                {
                  /*height: "100px", overflow: "auto" //for fixed panel expansion */
                }
              }
            >
              <Staff
                handle={this.handlestaff}
                staff={this.state.staff}
                list={staffs}
              />
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            className="panel"
            expanded={expanded === "panel3"}
            onChange={this.handleChange("panel3")}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <h4>Select Date</h4>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div>
                  <Calendar
                    onClickDay={this.onChange}
                    value={date.length ? date[0] : null}
                    minDate={new Date()}
                    className="calendar"
                  />
                </div>
                <div>
                  <Button className="clear" onClick={this.clear}>
                    Clear Selection..
                  </Button>
                </div>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            className="panel"
            expanded={expanded === "panel4"}
            onChange={this.handleChange("panel4")}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <h4>Select Time</h4>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            <div style={{display: "flex", flexWrap: "wrap" ,margin: "auto"}}>
                {
                    times.map( value => {
                        return(
                          <Button key={value.id} onClick={this.handletime(value.id)} className={time.indexOf(value.id) !== -1? "active" : ""} variant="outlined" color="primary">
                              {value.value}
                          </Button>
                        );
                      })
                }
            </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <Summary staff={staff.length? staff[0]:""} service={service.length? service[0]:""} time={time.length? time[0]:""} date={date.length? date[0].getDate()+"-"+(date[0].getMonth()+1)+"-"+date[0].getFullYear() :""}/>
          <Button
            key="email"
            variant="contained"
            className="email"
            color="primary"
            onClick={this.addmail}
          >
            Add to Email
          </Button>
        </MainUI>
      </div>
    );
  }
}
