import * as React from "react";
import "date-fns";
import { MainStyle } from "../styles/mainstyle";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import "flatpickr/dist/themes/material_blue.css";
import Flatpickr from "react-flatpickr";
import Button from '@material-ui/core/Button';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import EmailIcon from '@material-ui/icons/Email';
import {CopyToClipboard} from 'react-copy-to-clipboard';

let one= '<div><hr></div><div style="margin:0; padding:0; width:82px"><a href="';
let two= '" class="x_spot" style="display:block; font-family:Arial,sans-serif; font-size:13px; text-align:center; padding-top:10px; padding-bottom:10px; text-decoration:none; color:#476ce4; border:1px solid #476ce4; border-radius:10px">Book</a></div><p>Powered By <a href="https://appointy.com">Appointy</a></p></div>';
let baseurl="https://booking.appointy.com/rahul55";
export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category:'',
            service:'',
            staff:'',
            date:'',
            time:'',
            field: false,
            url: baseurl
        };
        this.handlecategory = this.handlecategory.bind(this);
        this.handle = this.handle.bind(this);
        this.click = this.click.bind(this);
        this.activateField = this.activateField.bind(this);
        this.disableFocus = this.disableFocus.bind(this);
     //   this.setUrl=this.setUrl.bind(this);
      }
      disableFocus() {
        if(this.state.date==="")
          this.setState({
             field: false
          })
       }
      //  setUrl = obj => {
      //    const queryString = Object.keys(obj).map( key => {key + '=' + obj[key]}).join('&');
      //    let copy=baseurl+"?"+queryString;
      //    this.setState({
      //     url: copy
      //    });
      //  }
      handlecategory = (event) => {
        let name = event.target.name;
        this.setState({
            [name]: event.target.value,
        });
      //  this.setUrl(Object.assign({}, this.state, { [name]: event.target.value }));
      };
      activateField() {
        this.setState({
         field: true
        })
       }
      handle = (date) => {
        this.setState({
            date: date
          });
          if(date === "")
          this.disableFocus();
          else
          this.activateField();
      //    this.setUrl();
      };

      click = async () => {
        let item=Office.context.mailbox.item;
       // document.getElementById("item-subject").innerHTML = "<b>Subject:</b> <br/>" + item.subject;
       let message = one+ this.state.url + two;
        item.body.getTypeAsync(
          function(result) {
              if (result.status == Office.AsyncResultStatus.Failed) {
                  document.getElementById('message').innerText += result.error.message;
              } else {
                  // Successfully got the type of item body.
                  // Set data of the appropriate type in body.
                  // Body is of HTML type.
                  // Specify HTML in the coercionType parameter
                  // of setSelectedDataAsync.
                  item.body.setSelectedDataAsync( message , {
                      coercionType: Office.CoercionType.Html,
                      asyncContext: { var3: 1, var4: 2 }
                  },
                  function(asyncResult) {
                      if (asyncResult.status ==
                          Office.AsyncResultStatus.Failed) {
                          document.getElementById('message').innerText += asyncResult.error.message;
                      } 
                      else {
                          // Successfully set data in item body.
                          // Do whatever appropriate for your scenario,
                          // using the arguments var3 and var4 as applicable.
                      }
                          });
                  
              }
          });
      };
  render() {
    const { category, service , staff , date ,time ,url} = this.state;
    const today=new Date();
    return (
        <div>
      <MainStyle>
        <h2>Share your Customer Booking Portal</h2>
        
        <p>Want customers to skip service/staff selection while booking? Generate a link with pre-selected details</p>
        <p>{this.state.category}</p>
      <FormControl className="form">
      <InputLabel id="demo-simple-select-outlined-label" className="active">Category</InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={category}
        onChange={this.handlecategory}
        label="Category"
        name="category"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
    <FormControl className="form">
      <InputLabel id="demo-simple-select-helper-label" >Service</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-outlined"
        value={service}
        onChange={this.handlecategory}
        label="Service"
        name="service"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
    <FormControl className="form">
      <InputLabel id="demo-simple-select-helper-label" >Staff</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-outlined"
        value={staff}
        onChange={this.handlecategory}
        label="Staff"
        name="staff"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>hello</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select> 
    </FormControl>
    <FormControl className="form">
    <InputLabel id="demo-simple-select-helper-label" className="MuiInputLabel-shrink" >Time</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-outlined"
        value={time}
        onChange={this.handlecategory}
        label="Time"
        name="time"
        p
      >
        <MenuItem value="" disabled>
          <em>select</em>
        </MenuItem>
        <MenuItem value={10} className="item">hello</MenuItem>
        <MenuItem value={20} className="item">Twenty</MenuItem>
        <MenuItem value={30} className="item">Thirty</MenuItem>
      </Select>
    </FormControl>
    <Flatpickr
        value={date}
        options={{ minDate: today, wrap: true }}
        onChange={this.handle}
        className="date"
        onClose={this.disableFocus}
      >
          <label for="date" >Select Date</label>
          <input className="inp" id="date"type='text' data-input onFocus={this.activateField} />
          
    </Flatpickr>
    <p className="url">{this.state.url}</p>
    <CopyToClipboard text={url}>
     <Button
        variant="contained"
        startIcon={<FileCopyIcon />}
        className="button"
      >
        Copy Link
      </Button>
      </CopyToClipboard>
      <Button
        variant="contained"
        startIcon={<EmailIcon />}
        className="button"
        onClick={this.click}
      >
        Add to Email
      </Button>
    </MainStyle>
    </div>
    );
  }
}







// <Style>
//         <div style={{position: "relative"}}>
//         <Button
//         variant="contained"
//         className="head"
//         onClick={this.click}
//       >
//        G
//       </Button>
//       <ExpandMoreIcon
//        onClick={this.click}
//        className="arrow"
//        />
//        </div>
//        <div ref={node => {this.node = node;}} className={this.state.open?"show":"hide"}>
//        <List dense style={{ width: "40vw", fontSize: "14px"}}>
//        {[
//             { val: 'choco' , url: 'https://dev-booking.appointy.com' },
//             { val:'straw' ,url: 'https://dev-booking.appointy.com' },
//             { val:'van', url: 'https://dev-booking.appointy.com' }
//           ].map(value => {
//             return(
//           <ListItem
//             key={value.val}
//             className="item"
//             style={{
//               marginBottom: "2px"
//             }}
//             button 
//             component="a" href={value.url}
//             target="_blank"
//           > 
//            <ListItemText style={{fontSize: "14px"}} primary={value.val}/>
//           </ListItem>
          
//             );
//           })}
//       </List>
//        </div>
//        </Style>