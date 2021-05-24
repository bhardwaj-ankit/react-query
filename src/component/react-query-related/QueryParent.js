import React from "react";

import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { AgGridReact, AgGridColumn } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

const queryClient = new QueryClient();

export function QueryParent(props) {
  return (
    <QueryClientProvider client={queryClient}>
      <Parent></Parent>
    </QueryClientProvider>
  );
}

const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

const fetchDataUsingId = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/$(id)`);
  return res.json();
};

function Parent(props) {
  const { isLoading, error, data } = useQuery("dataList", fetchData);
  console.log(data);

  const columnDefs = [
    {
      headerName: "User Id",
      field: "userId",
      // sort: "asc",
      // unsorticon: true,
      // width: 400,
      //cellRendererFramework: LinkCellRenderer,
    },
    {
      headerName: "Id",
      field: "id",
      // sort: "asc",
      // unsorticon: true,
      // width: 400,
      //cellRendererFramework: LinkCellRenderer,
    },
    {
      headerName: "Title",
      field: "title",
      // sort: "asc",
      // unsorticon: true,
      // width: 400,
      //cellRendererFramework: LinkCellRenderer,
    },
    {
      headerName: "Body",
      field: "body",
      // sort: "asc",
      // unsorticon: true,
      // width: 400,
      //cellRendererFramework: LinkCellRenderer,
    },
  ];

  let rowData = data ? data : [];

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <div className="ag-theme-balham" style={{ width: "auto", height: 600 }}>
        <AgGridReact
          rowData={rowData}
          // columnDefs={columnDefs}
          pagination={true}
          // sortable={true}
          // filter={true}
          // onGridReady={this.handleOnGridReady}
          // gridOptions={this.state.gridOptions}
        >
          <AgGridColumn
            field="userId"
            sortable={true}
            filter={true}
            checkboxSelection={true}
          ></AgGridColumn>
          <AgGridColumn field="id" sortable={true} filter={true}></AgGridColumn>
          <AgGridColumn
            field="title"
            sortable={true}
            filter={true}
          ></AgGridColumn>
        </AgGridReact>
      </div>
      {/* {data &&
        data.map((item) => (
          <div>
            <h1>Title: {item.title}</h1>
            <p>Title: {item.body}</p>
            <hr />
          </div>
        ))} */}
    </>
  );
}
