import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #f8f8f8;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    line-height: 1.5em;
  }

  body {
    text-align: center;
  }
  hr {
    width: 200px;
    text-align:center !important;
    margin: 0 auto !important;
  }

  .card-colored {
    top: 0;
    -webkit-transition: all .3s ease;
    transition: all .3s ease;
    color: #fff;
    padding: 30px 40px;
    position: relative;
    border-radius: 6px;
    cursor: pointer;
    margin: 30px 15px 0
  }

  .card-colored:hover {
    -webkit-box-shadow: 0 5px 24px rgba(0, 0, 0, 0.15);
    box-shadow: 0 5px 24px rgba(0, 0, 0, 0.15);
    top: -10px;
  }

  .flex-center {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .flex-center > * {
    margin: 0
  }

  .bold {
    font-weight: 500;
    margin-top: 15px;
    font-size: 16px;
  }

  .ant-table-content .ant-table-thead tr th ,
  .ant-table-content .ant-table-tbody tr td {
    text-align: center
  }

  .ant-table-content .ant-table-thead tr th i {
    margin-left: 5px
  }

  .ant-table-content .ant-table-tbody tr td:last-child a {
    display: block;
    text-align: center;
    background-color: #1990ff;
    padding: 6px 0;
    color: white;
    border-radius: 4px;
  }
`;
