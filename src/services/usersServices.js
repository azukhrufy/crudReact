import axios from 'axios';

export const GET_USERS_LIST = "GET_USERS_LIST";

export const usersServices = () => {
    return dispatch => {
        axios.get("https://my-json-server.typicode.com/azukhrufy/crudReactDB/users")
        .then(function(res){
            let result = res.data;
            dispatch({
                type: GET_USERS_LIST,
                payload: {
                    data: result
                }
            })
            console.log(result)
        })
    }
}

