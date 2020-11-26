import React, { Component } from "react";
import { BrowserRouter, Route} from "react-router-dom";
import JumbotronComponent from "./components/JumbotronComponent";
import NavbarComponent from "./components/NavbarComponent";
import HomeLayout from "./Layouts/HomeLayout";
import CreateUserLayout from "./Layouts/CreateUserLayout";
import EditUserLayout from "./Layouts/EditUserLayout";
import DetailUserLayout from "./Layouts/DetailUserLayout";

export default class App extends Component {
  
  render() {
    
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent  />
       
        <BrowserRouter>
          <Route path="/" exact>
            <HomeLayout  />
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
