import { faEdit, faInfo, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Button, Container } from "reactstrap";

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
          <Button color="primary">
            <FontAwesomeIcon icon={faEdit} />
          </Button>
          <Button color="danger">
            <FontAwesomeIcon icon={faTrash} />
          </Button>
          <Button color="secondary">
            <FontAwesomeIcon icon={faInfo} />
          </Button>
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
      <BootstrapTable
        keyField="id"
        data={props.users}
        columns={columns}
        defaultSorted={defaultSorted}
      />
    </Container>
  );
};
