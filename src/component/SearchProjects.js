import React from "react";
import axios from "axios";

export default function SearchProjects({ setProjects }) {
  const search = function () {
    console.log("aaaaa");
    // e.preventDefault();
    // creates entity
    // fetch("http://localhost:8084/student", {
    //   method: "POST",
    //   //   mode: "no-cors",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Accept: "*/*",
    //   },
    //   body: JSON.stringify({
    //     name: "Neymar",
    //   }),
    // })
    //   .then((response) => {
    //     console.log(response);
    //     return response.json();
    //   })
    //   .then((response) => {
    //     console.log(response);
    //     // this.setState((prevState) => ({
    //     //   name: prevState.name,
    //     //   searchResult: response,
    //     // }));
    //     setProjects([
    //       {
    //         projectNamel: "p1",
    //         key: "ab",
    //         tools: "t1",
    //         appld: "a1",
    //         description: "desc",
    //       },
    //       {
    //         projectNamel: "p2",
    //         key: "ab",
    //         tools: "t2",
    //         appld: "a2",
    //         description: "desc",
    //       },
    //       {
    //         projectNamel: response[0].name,
    //         key: response[0].passportNumber,
    //         tools: "t2",
    //         appld: "a2",
    //         description: "desc",
    //       },
    //     ]);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    axios
      .post(`http://localhost:8084/student`, {
        name: "Neymar",
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setProjects([
          {
            projectNamel: "p1",
            key: "ab",
            tools: "t1",
            appld: "a1",
            description: "desc",
          },
          {
            projectNamel: "p2",
            key: "ab",
            tools: "t2",
            appld: "a2",
            description: "desc",
          },
          {
            projectNamel: res.data[0].name,
            key: res.data[0].passportNumber,
            tools: "t2",
            appld: "a2",
            description: "desc",
          },
        ]);
      });
  };

  return (
    <>
      <form>
        <div className="form-group col-m0-2" style={{ float: "left" }}>
          <label htmlFor="memberSID" className="control-label">
            Member SID:{" "}
          </label>
          <input
            id="memberSID"
            className="form-control"
            type="text"
            name="memberSID"
            placeholder="Enter SID"
          />
        </div>
        <div className="form-group col-and-2" style={{ float: "left" }}>
          <label htmlFor="ownerSID" className="control-laber">
            Owner SID:{" "}
          </label>
          <input
            id="ownerSID"
            className="form-control"
            type="text"
            name="ownerSID"
            placeholder="Enter SID"
          />
        </div>
        <div className="form-group col-and-4" style={{ float: "left" }}>
          <label htmlFor="name" className="control-label">
            Project Name:{" "}
          </label>
          <input
            id="name"
            className="form-control"
            type="text"
            name="name"
            placeholder="Enter Project Name"
          />
        </div>
        <div className="form-group col-and-2" style={{ float: "left" }}>
          <label htmlFor="appID" className="control-label">
            App ID:{" "}
          </label>
          <input
            id="appID"
            className="form-control"
            type="text"
            name="appID"
            placeholder="Enter App ID"
          />
        </div>
      </form>
      <div className="form-group col-md-auto">
        <button
          // type="submit"
          className="btn btn-primary search-form-btn"
          onClick={() => search()}
        >
          Search
        </button>
      </div>
    </>
  );
}
