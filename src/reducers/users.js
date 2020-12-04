import {GET_USERS_LIST} from '../services/usersServices'

let usersTable =  {
  getUsersList: false,
  getUsersListError: false
}

const users = (state = usersTable, services) => {
  switch (services.type) {
    case GET_USERS_LIST:
      return{
        ...state,
        getUsersList: services.payload.data,
        getUsersListError: services.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default users;
