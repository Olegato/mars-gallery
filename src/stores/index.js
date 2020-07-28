import { combineReducers, createStore,  applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
// import { composeWithDevTools } from 'redux-devtools-extension'

import testStore from './testStore/testRedux'
import startupSaga from './startupSaga'

const reducers = combineReducers({
  testStore
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(startupSaga)

export default store
