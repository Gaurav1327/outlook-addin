import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { MainUI } from "../styles/new";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import PersonIcon from "@material-ui/icons/Person";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
export default class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { service, staff, date, time } = this.props;
    if (service.length || staff.length || date.length || time.length) {
      return (
        <MainUI>
          <div className="summary">
            <p
              style={{
                marginBottom: "4px",
                fontSize: "14px",
                fontWeight: "900",
              }}
            >
              Summary
            </p>
            {service !== "" ? (
              <List dense style={{ width: "100%", fontSize: "14px" }}>
                <ListItem
                  style={{
                    marginBottom: "1px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "13px",
                      marginTop: "2px",
                      marginBottom: "2px",
                      marginRight: "10px",
                      color: "white",
                      backgroundColor: "#476ce4",
                      padding: "10px 16px",
                      borderRadius: "4px",
                    }}
                  >
                    S
                  </h3>
                  <ListItemText
                    style={{ fontSize: "14px" }}
                    primary={service}
                  />
                </ListItem>
              </List>
            ) : (
              ""
            )}
            {staff !== "" ? (
              <List dense style={{ width: "100%", fontSize: "14px" }}>
                <ListItem
                  style={{
                    marginBottom: "2px",
                  }}
                >
                  <PersonIcon
                    style={{
                      marginRight: "15px",
                      marginLeft: "5px",
                      color: "#6b6b6b",
                    }}
                  />
                  <ListItemText style={{ fontSize: "18px" }} primary={staff} />
                </ListItem>
              </List>
            ) : (
              ""
            )}
            {date !== "" ? (
              <List dense style={{ width: "100%", fontSize: "14px" }}>
                <ListItem
                  style={{
                    marginBottom: "2px",
                  }}
                >
                  <CalendarTodayIcon
                    style={{
                      marginRight: "15px",
                      marginLeft: "5px",
                      color: "#6b6b6b",
                    }}
                  />
                  <ListItemText style={{ fontSize: "18px" }} primary={date} />
                </ListItem>
              </List>
            ) : (
              ""
            )}
            {time !== "" ? (
              <List dense style={{ width: "100%", fontSize: "14px" }}>
                <ListItem
                  style={{
                    marginBottom: "2px",
                  }}
                >
                  <AccessTimeIcon
                    style={{
                      marginRight: "15px",
                      marginLeft: "5px",
                      color: "#6b6b6b",
                    }}
                  />
                  <ListItemText
                    style={{ fontSize: "14px", fontWeight: "600" }}
                    primary={time}
                  />
                </ListItem>
              </List>
            ) : (
              ""
            )}
          </div>
        </MainUI>
      );
    } else {
      return <div></div>;
    }
  }
}
