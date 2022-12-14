import { getLocalState } from '../../utils';
import initStore from './initStore';

const localState = getLocalState();

const initialState = localState ? { ...initStore, ...localState } : initStore;

export default initialState;
