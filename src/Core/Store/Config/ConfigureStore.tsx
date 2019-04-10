import { createStore, Store } from 'redux'
import rootReducer from '../Reducers/AllReducers'

export default (initialState: any): Store<any> => {
    const store = createStore(
        rootReducer,
        initialState,
    )
    return store
}
