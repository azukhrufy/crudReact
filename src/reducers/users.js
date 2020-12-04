import {GET_USERS_LIST, GET_USER_DETAIL} from '../services/usersServices'

let usersTable =  {
  UsersList: false,
  UsersListError: false,
  UserDetail: false
}

const users = (state = usersTable, services) => {
  switch (services.type) {
    case GET_USERS_LIST:
      return{
        ...state,
        UsersList: services.payload.data,
        UsersListError: services.payload.errorMessage,
      };

      case GET_USER_DETAIL:
      return{
        ...state,
        UserDetail: services.payload.data,
        UsersListError: services.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default users;
