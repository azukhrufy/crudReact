import axios from "axios";

export const GET_USERS_LIST = "GET_USERS_LIST";
export const GET_USERS_DETAILS = "GET_USERS_DETAILS";

export const usersServices = () => {
  return (dispatch) => {
    //get users data from api
    axios
      .get("https://my-json-server.typicode.com/azukhrufy/crudReactDB/users")
      .then(function (res) {
        let result = res.data;
        dispatch({
          type: GET_USERS_LIST,
          payload: {
            data: result,
            errorMessage: false,
          },
        });
        console.log(result);
      })
      .catch(function (error) {
        dispatch({
            type: GET_USERS_LIST,
            payload: {
              data: false,
              errorMessage: error.message,
            },
          });
        console.log(error);
      })
  };
};
