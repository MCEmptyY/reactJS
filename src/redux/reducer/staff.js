import { ADD_STAFFS, ADD_STAFF, STAFFS_LOADING, STAFFS_FAILED} from '../actions/ActionTypes'

const initState = {
    staffs: [],
    isLoading: false,
}

export default function staff(state = initState, action) {
    console.log(action.type)
    switch(action.type) {
        case ADD_STAFFS:
            return {
                ...state,
                staffs: action.payload
            }

        case STAFFS_FAILED:
            return {
                ...state,
                isLoading: false
            }

        case STAFFS_LOADING:
            return {
                ...state,
                isLoading: true
            }

        case ADD_STAFF:
            let newStaff = {}
            return {
                ...state,
                isLoading: false,
                staffs: {...initState.staffs, newStaff}
            }

        default:
            return state;
    }
}