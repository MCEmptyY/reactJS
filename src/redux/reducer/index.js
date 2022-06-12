import { combineReducers } from 'redux'
import staff from './staff'

export const rootReducers = () =>
    combineReducers({
            staffs: staff
        }
    )
