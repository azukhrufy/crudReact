import axios from "axios";

export const GET_USERS_LIST = "GET_USERS_LIST";
export const GET_USER_DETAIL = "GET_USER_DETAIL";

export const getUsersList = () => {
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
      });
  };
};

export const getUserDetail = (id) => {
  return (dispatch) => {
    //get users data from api
    axios
      .get(
        `https://my-json-server.typicode.com/azukhrufy/crudReactDB/users/${id}`
      )
      .then(function (res) {
        let result = res.data;
        dispatch({
          type: GET_USER_DETAIL,
          payload: {
            data: result,
            errorMessage: false,
          },
        });
        console.log(result);
      })
      .catch(function (error) {
        dispatch({
          type: GET_USER_DETAIL,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
        console.log(error);
      });
  };
};

export const deleteUserDetail = () => {
  return (dispatch) => {
    dispatch({
      type: GET_USER_DETAIL,
      payload: {
        data: false,
        errorMessage: false,
      },
    });
  };
};
