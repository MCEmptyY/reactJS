import * as types from './ActionTypes'
import axios from 'axios'
import { API_URL } from '../../.env'

const url = API_URL

export const fetchStaff = () => (dispatch) => {
    //dispatch(staffsLoading(true))
    // return axios.get(`${url}/staffs`)
    //     .then(res => dispatch(addStaffs(res.data)))
    //     .catch(error => dispatch(staffsFailed(error.message)))
    //     .finally(() => dispatch(staffsLoading(false)))

    return fetch(`${url}/staffs`)
        .then(
            response => {
                if (response.ok) {
                    return response;
                } else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(staffs => dispatch(addStaffs(staffs)))
        .catch(error => dispatch(staffsFailed(error.message)))
}

export const addStaffs = (staffs) => ({
    type: types.ADD_STAFFS,
    payload: staffs
});

export const staffsLoading = () => ({
    type: types.STAFFS_LOADING
});

export const staffsFailed = (errMess) => ({
    type: types.STAFFS_FAILED,
    payload: errMess
});