import {GET_USERS_LIST} from '../services/usersServices'

let usersTable =  {
  UsersList: false,
  UsersListError: false
}

const users = (state = usersTable, services) => {
  switch (services.type) {
    case GET_USERS_LIST:
      return{
        ...state,
        UsersList: services.payload.data,
        UsersListError: services.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default users;
