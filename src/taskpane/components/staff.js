import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemPrimaryAction from "@material-ui/core/ListItemSecondaryAction";
import Checkbox from "@material-ui/core/Checkbox";
import { MainUI } from "../styles/new";
export default class Staff extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { staff, list } = this.props;

    return (
      <MainUI>
        <List dense style={{ width: "85vw", fontSize: "14px" }}>
          {list.map((value) => {
            const labelId = `checkbox-list-primary-label-${value.id}`;
            return (
              <ListItem
                key={value.id}
                button
                style={{
                  borderTop: "0.2px solid #ebebeb",
                  borderBottom: "0.2px solid #ebebeb",
                  marginBottom: "2px",
                }}
              >
                <h3
                  style={{
                    fontSize: "16px",
                    marginTop: "2px",
                    marginBottom: "2px",
                    marginRight: "10px",
                    color: "white",
                    backgroundColor: "#476ce4",
                    padding: "10px 16px",
                    borderRadius: "4px",
                  }}
                >
                  {value.value[0].toUpperCase()}
                </h3>
                <ListItemText
                  id={labelId}
                  style={{ fontSize: "14px" }}
                  primary={`${value.value}`}
                  secondary={"hello"}
                />
                <ListItemPrimaryAction>
                  <Checkbox
                    color="primary"
                    edge="end"
                    onChange={this.props.handle(value.id)}
                    checked={staff.indexOf(value.id) !== -1}
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemPrimaryAction>
              </ListItem>
            );
          })}
        </List>
      </MainUI>
    );
  }
}
