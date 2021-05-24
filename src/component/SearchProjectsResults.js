import React, { Component } from "react";
import autoBind from "react-autobind";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

export default class SearchProjectsResults extends Component {
  constructor(props) {
    super(props);

    const columnDefs = [
      {
        headerName: "Project",
        field: "projectNamel",
        // sort: "asc",
        // unsorticon: true,
        // width: 400,
        //cellRendererFramework: LinkCellRenderer,
      },
      {
        headerName: "Module",
        field: "key",
        // width: 205,
        // unsorticon: true,
      },
      {
        headerName: "Tools",
        field: "tools",
        // width: 216,
        // suppressMenu: true,
        // sortable: false,
        //cellRendererFramework: ToolsCellRenderer,
      },
      {
        headerName: "App ID",
        field: "appld",
        // width: 110,
        // unSortIcon: true,
        //cellRendererFramework: AppldCellRenderer,
      },
      {
        headerName: "Description",
        field: "description",
        // width: 649,
        // unSortIcon: true,
      },
    ];

    // const gridOptions = {
    //   rowHeight: 33,
    //   headerHeight: 33,
    //   suppressMenuHide: true,
    //   defaultColDef: {
    //     sortable: true,
    //     resizable: true,
    //     filter: true,
    //   },
    //   suppressNoRowsOverlay: true,
    // };

    this.state = {
      columnDefs: columnDefs,
      //   gridOptions: gridOptions,
      //   tooManyRecordsWarning: false,
      //   recordCount: 0,
      //   links: this.props.links,
      //   queryError: false,
      rowData: [
        {
          projectNamel: "p1",
          key: "ab",
          tools: "t1",
          appld: "a1",
          description: "desc",
        },
      ],
    };

    autoBind(this);
  }
  render() {
    return (
      <>
        <div>
          <h1>Search Results Here!!</h1>
        </div>
        <div className="ag-theme-balham" style={{ width: "auto", height: 600 }}>
          <AgGridReact
            rowData={this.props.results}
            columnDefs={this.state.columnDefs}
            // onGridReady={this.handleOnGridReady}
            // gridOptions={this.state.gridOptions}
          />
        </div>
      </>
    );
  }
}
