import {GET_USERS_LIST} from '../services/usersServices'

let usersTable =  {
  getUsersList: false
}

const users = (state = usersTable, services) => {
  switch (services.type) {
    case GET_USERS_LIST:
      return{
        ...state,
        getUsersList: services.payload.data,
      };
    default:
      return state;
  }
};

export default users;
