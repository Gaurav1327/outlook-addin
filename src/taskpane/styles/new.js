import styled from "styled-components";

export const MainUI = styled.section`
  font-size: 16px;

  /*checkboxes*/
  .MuiCheckbox-colorPrimary.Mui-checked {
    color: #476ce4;
  }
  .MuiIconButton-colorPrimary {
    color: #476ce4;
  }
  /*list each line*/
  .MuiListItem-gutters {
    padding-left: 2px;
  }
  /*list value*/
  .MuiTypography-body2 {
    font-size: 14px;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 200;
    line-height: 1.2;
    letter-spacing: 0.01071em;
  }
  .panel {
    width: 100%;
    font-size: 16px;
    margin-top: 15px;
    p {
      font-size: 14px;
      margin-top: 3px;
      margin-bottom: 3px;
    }
    .MuiExpansionPanelSummary-content.Mui-expanded {
      margin: 8px 0px;
      border-bottom: none;
    }
    .MuiExpansionPanelSummary-root {
      box-shadow: none;
    }
    h4 {
      font-size: 14px;
      margin: 2px 0px;
      font-weight: 900;
      color: black;
    }
  }
  div.react-calendar {
    border: none;
  }
  .calendar {
    width: 80vw;
    .react-calendar__tile:disabled {
      background-color: white;
      color: #9b9ea7;
    }

    abbr[title] {
      text-decoration: none;
      font-weight: 200;
    }

    .react-calendar__tile--active {
      background: #476ce4 !important;
      color: white !important;
    }
    .react-calendar__tile {
      color: #476ce4;
    }
    .react-calendar__month-view__days__day {
      color: #476ce4;
    }
    .react-calendar__tile--now {
      border: 0.5px solid #476ce4;
      background: white;
      background-image: initial;
      background-position-x: initial;
      background-position-y: initial;
      background-size: initial;
      background-repeat-x: initial;
      background-repeat-y: initial;
      background-attachment: initial;
      background-origin: initial;
      background-clip: initial;
      background-color: white;
    }
  }
  /* time button styling */
  .MuiButton-outlinedPrimary {
    width: 24vw;
    margin-bottom: 10px;
    margin-right: 5px;
    color: #476ce4;
    border: 1px solid #476ce4;
  }
  span.MuiButton-label {
    font-size: 12px;
  }
  .MuiTypography-body2 {
    color: black;
  }
  .MuiTypography-colorTextSecondary {
    color: #bfbbbb;
  }
  .MuiExpansionPanelDetails-root {
    padding-top: 0px;
  }
  .active {
    span.MuiButton-label {
      color: white;
    }
    .MuiButton-outlined {
      background-color: #476ce4;
    }
    background-color: #476ce4;
    .MuiButton-root:hover {
      background-color: #476ce4;
      color: white;
    }
  }
  .active:hover {
    background-color: #476ce4;
    color: white;
  }
  .MuiButton-outlined {
    border: 1px solid rgba(0, 0, 0, 0.23);
    padding: 5px 8px;
  }
  .summary {
    box-shadow: 0 0px 0px rgba(0, 0, 0, 0.19), 0 0px 2px rgba(0, 0, 0, 0.23);
    margin-top: 10px;
    padding: 8px 8px;
    border: 0.5px solid #a6a2a2;
    h4 {
      margin-top: 2px;
    }
  }
  .clear {
    float: right;
    background-color: none;
    border: none;
    color: #476ce4;
  }
  .clear:hover {
    background-color: none;
  }
  .email {
    margin-top: 20px;
    margin-left: 30vw;
    font-size: 16px;
    background-color: #476ce4;
  }
`;
