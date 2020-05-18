import styled from "styled-components";

export const MainStyle = styled.section`
  margin-left: 15px;
  margin-right: 15px;
  img {
    border-radius: 50%;
    margin-bottom: 30px;
  }
  h2 {
    margin: auto;
    text-align: center;
    font-size: 14px;
  }

  .form {
    width: 40vw;
    padding: auto;
    padding-left: 0px;
    padding-right: 10px;
    margin: auto;
    margin-top: 20px;
    input {
      border: none;
      border: 0.5px solid black;
    }
    .MuiInputBase-root {
      border-bottom: none;
      border: 2px solid #d2d2d4;
      background-color: #fff;
      padding-top: 10px;
    }
    .MuiInputLabel-shrink {
      transform: translate(-6px, 0px) scale(1);
      transform-origin: top left;
      color: #99999e;
    }
    font-size: 16px;
    label {
      font-size: 14px;
      padding-left: 10px;
    }
    .MuiSelect-select {
      font-size: 16px;
      padding-top: 2px;
      padding-right: 2px;
      padding-left: 7px;
    }
    .MuiMenuItem-root {
      font-size: 16px;
    }
    ul.MuiList-padding {
      padding-top: 0px;
      padding-bottom: 0px;
    }
    .item {
      width: auto;
      overflow: hidden;
      font-size: 14px;
      box-sizing: border-box;
      min-height: 0;
      font-family: "Roboto", "Helvetica", "Arial", sans-serif;
      font-weight: 400;
      line-height: 1.5;
      padding-top: 2px;
      white-space: nowrap;
      letter-spacing: 0.00938em;
      padding-bottom: 2px;
    }
  }
  li.MuiMenuItem-root {
    width: auto;
    overflow: hidden;
    font-size: 14px;
    box-sizing: border-box;
    min-height: 0;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.5;
    padding-top: 2px;
    white-space: nowrap;
    letter-spacing: 0.00938em;
    padding-bottom: 2px;
  }
  p {
    margin-top: 20px;
    font-size: 14px;
  }

  .date {
    position: relative;
    margin-top: 20px;
    padding-left: 0px;
    .inp {
      width: 83vw;
      padding-top: 13px;
      border: none;
      min-height: 28px;
      border: 1px solid #d2d2d4;
      padding-left: 10px;
      padding-bottom: 7px;
      outline: none;
      color: hsl(0, 0%, 20%);
      font-size: 14px;
      font-family: "Roboto", "Helvetica", "Arial", sans-serif;

      line-height: 1;
      letter-spacing: 0.00938em;
      box-sizing: border-box;
    }

    label {
      position: absolute;
      top: -6px;
      left: 10px;
      background-color: white;
      padding-right: 3px;
      padding-left: 2px;
      font-size: 10px;
    }

    input.active {
      border: none;
      border: 1px solid #2684ff;
    }
    /** active label */
  }
  .url {
    color: #42a5f5;
  }
  span.css-1okebmr-indicatorSeparator {
    display: none;
  }
  .button {
    margin-left: 3vw;
    margin-top: 20px;
    font-size: 10px;
    color: white;
    font-weight: 400;
    background-color: #42a5f5;
  }
  .button:hover {
    background-color: #32a1fa;
  }

  .selection {
    position: relative;
    .select {
      width: 40vw;
      border: none;
      font-size: 14px;
      margin-right: 10px;
      box-sizing: border-box;
      .css-yk16xz-control {
        border: none;
        border-radius: 0px;
        border: 1px solid #d2d2d4;
      }
      .css-1pahdxg-control {
        border: none;
        border-radius: 0px;
      }
      span.css-1laao21-a11yText {
        border: none;
      }
      div.select.css-2b097c-container {
        border: none;
      }
    }
    label {
      position: absolute;
      top: -6px;
      left: 10px;
      background-color: white;
      padding-right: 3px;
      padding-left: 2px;
      font-size: 9px;
    }
  }

  div.select.css-2b097c-container {
    border: none;
  }
`;
