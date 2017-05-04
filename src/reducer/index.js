import { combineReducers } from 'redux';
import reducer_bio from './reducer_bio';

const rootreducer = combineReducers ({
    bio: BioReducer  //key : reducer
});

export default rootReducer;