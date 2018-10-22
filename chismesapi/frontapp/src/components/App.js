import React from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Table from "./Table";
import Form from "./Form";
import '../style/style.css';

const App = () => (
  <React.Fragment >
    <div className = "vertical">
      <Form endpoint="api/chismes/" />
      <DataProvider endpoint="api/chismes/" 
      render={data => <Table data={data} />} /> 
      <h1 className="thicc-letters" >Los Chismes</h1>
    </div>
  </React.Fragment>
);
const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;