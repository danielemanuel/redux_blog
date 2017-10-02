import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import Postreducer from './reducer_posts';

const rootReducer = combineReducers({
  posts: Postreducer,
  form: formReducer
});

export default rootReducer;
