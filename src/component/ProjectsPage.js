import React, { useState } from "react";
import SearchProjects from "./SearchProjects";
import SearchProjectsResults from "./SearchProjectsResults";

export default function Projectspage(props) {
  const [projects, setProjects] = useState([
    {
      projectNamel: "p1",
      key: "ab",
      tools: "t1",
      appld: "a1",
      description: "desc",
    },
  ]);
  return (
    <>
      <h1>Img Admin App</h1>
      <div className="card-body">
        <SearchProjects setProjects={setProjects} />
      </div>
      <div>
        <SearchProjectsResults results={projects} />
      </div>
    </>
  );
}
