import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import NewApp from "./component/NewApp";
import Projectspage from "./component/ProjectsPage";
import { QueryParent } from "./component/react-query-related/QueryParent";
import ReactQueryExample from "./component/ReactQueryExample";
import Searchstudent from "./component/SearchStudent";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Searchstudent></Searchstudent> */}
    {/* <Projectspage></Projectspage> */}
    {/* <ReactQueryExample></ReactQueryExample> */}
    <QueryParent></QueryParent>
  </React.StrictMode>,
  rootElement
);
