import React, { Component } from "react";
import { BrowserRouter, Route} from "react-router-dom";
import JumbotronComponent from "./components/JumbotronComponent";
import NavbarComponent from "./components/NavbarComponent";
import { UsersTableComponent } from "./components/UsersTableComponent";
import HomeLayout from "./Layouts/HomeLayout";
import CreateUserLayout from "./Layouts/CreateUserLayout";
import EditUserLayout from "./Layouts/EditUserLayout";
import DetailUserLayout from "./Layouts/DetailUserLayout";

export default class App extends Component {
  state = {
    title: "React Crud with Redux",
    users: [
      {
        id: 1,
        name: "Moch Rizaldy",
        address: "Bandung",
        age: 21,
        phone: "085777777777",
      },
      {
        id: 2,
        name: "Fitriana",
        address: "Tangerang",
        age: 20,
        phone: "085888888888",
      },
      {
        id: 3,
        name: "Angung Junior",
        address: "Bangka Belitung",
        age: 22,
        phone: "085666777888",
      },
    ],
  };

  render() {
    const { title, users } = this.state;
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent title={title} />
       
        <BrowserRouter>
          <Route path="/" exact>
            <HomeLayout users={users} />
          </Route>
          <Route path="/create" exact>
            <CreateUserLayout />
          </Route>
          <Route path="/edit/:id" exact>
            <EditUserLayout />
          </Route>
          <Route path="/detail/:id" exact>
            <DetailUserLayout />
          </Route>
        </BrowserRouter>
      </div>
    );
  }
}
