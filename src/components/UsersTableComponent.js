import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Button, Container, Spinner } from "reactstrap";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { faEdit, faInfo, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      const params = row.id;
      return (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Link to={`edit/${params}`}>
            <Button color="primary">
              <FontAwesomeIcon icon={faEdit} />
            </Button>
          </Link>
          <Button color="danger">
            <FontAwesomeIcon icon={faTrash} />
          </Button>
          <Link to={`detail/${params}`}>
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

const mapStateToProps = (state) => {
  return {
    getUsersList: state.users.getUsersList,
    getUsersListError: state.users.getUsersListError,
  };
};

const UsersTableComponent = (props) => {
  return (
    <Container>
      {props.getUsersList ? (
        <ToolkitProvider
          keyField="id"
          data={props.getUsersList}
          columns={columns}
          defaultSorted={defaultSorted}
          search
        >
          {(props) => (
            <div>
              <div className="Row">
                <div className="float-right">
                  <SearchBar {...props.searchProps} placeholder="Search ..." />
                </div>
                <div className="float-left">
                  <Link to={"create"}>
                    <Button>Create</Button>
                  </Link>
                </div>
              </div>

              <BootstrapTable
                {...props.baseProps}
                pagination={paginationFactory()}
              />
            </div>
          )}
        </ToolkitProvider>
      ) : (
        <div className="text-center">
          {props.getUsersListError ? (
            <h4>{props.getUsersListError}</h4>
          ) : (
            <Spinner color="dark" />
          )}
        </div>
      )}
    </Container>
  );
};

export default connect(mapStateToProps, null)(UsersTableComponent);
