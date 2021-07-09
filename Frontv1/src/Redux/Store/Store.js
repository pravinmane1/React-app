import {applyMiddleware, createStore,combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'
import Admin from '../Reducer/AdminReducer/AdminReducer';
import Auth from '../Authentication/Reducer';
import Patient from '../../Redux/Reducer/PatientReducer/PatientReducer'
import Doctor from '../../Redux/Reducer/DoctorReducer/DoctorReducer'


const rootReducer=combineReducers({
    Admin, Auth,Patient, Doctor
    // add your reducer here
})

const store=createStore(rootReducer,applyMiddleware(thunkMiddleware));

export default store;