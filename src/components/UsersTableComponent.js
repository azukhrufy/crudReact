import { faEdit, faInfo, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Button, Container } from "reactstrap";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Link } from "react-router-dom";

const { SearchBar } = Search;

const columns = [
  {
    dataField: "id",
    text: "ID",
    sort: true,
  },
  {
    dataField: "name",
    text: "Name",
    sort: true,
  },
  {
    dataField: "address",
    text: "Address",
    sort: true,
  },
  {
    dataField: "age",
    text: "Age",
    sort: true,
  },
  {
    dataField: "phone",
    text: "Phone",
    sort: true,
  },
  {
    dataField: "link",
    text: "Actions",
    sort: false,
    formatter: (rowContent, row) => {
      return (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Link to={"edit/"+row.id}>
          <Button color="primary">
            <FontAwesomeIcon icon={faEdit} />
          </Button>
          </Link>
          <Button color="danger">
            <FontAwesomeIcon icon={faTrash} />
          </Button>
          <Link to={"detail/"+row.id}>
          <Button color="secondary">
            <FontAwesomeIcon icon={faInfo} />
          </Button>
          </Link>
        </div>
      );
    },
  },
];

const defaultSorted = [
  {
    dataField: "name",
    order: "desc",
  },
];
export const UsersTableComponent = (props) => {
  return (
    <Container>
      <ToolkitProvider
        keyField="id"
        data={props.users}
        columns={columns}
        defaultSorted={defaultSorted}
        search
        
      >
        {(props) => (
          <div>
            <div className="float-right">
            <SearchBar {...props.searchProps} placeholder="Search ..." />
            </div>

            <BootstrapTable {...props.baseProps} pagination={ paginationFactory() }/>
          </div>
        )}
      </ToolkitProvider>
    </Container>
  );
};
