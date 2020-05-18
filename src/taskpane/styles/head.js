import styled from "styled-components";

export const Style = styled.section`
  .head {
    background: none;
    border: none;
    box-shadow: none;
    float: left;
    background-color: #e6e6e3;
    border-radius: 50%;
    margin-bottom: 15px;
  }
  .show {
    border: 1px solid #d7dffc;
    border-radius: 2px;
    position: absolute;
    display: block;
    top: 85px;
    left: 40px;
    z-index: 1;
    background-color: #fff;
    .item:hover {
      background-color: #f2f5ff;
    }
    a {
      color: #000;
      text-decoration: none;
    }
  }
  .hide {
    display: none;
  }
  .arrow {
    padding-left: 0px;
    color: #476ce4;
    float: left;
    width: 0.6em;
    font-weight: 800;
    padding-top: 8px;
    cursor: pointer;
  }
  button.MuiButton-root.head:hover {
    border: none;
    background-color: #e6e6e3;
  }
  button.MuiButton-root.head {
    min-width: 35px;
  }
  .head:hover {
    box-shadow: none;
    background: none;
  }
`;
