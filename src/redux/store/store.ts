import { createStore } from 'redux';
import reducer from '../reducers';

//@ts-ignore
const store = createStore(reducer);

export default store;
