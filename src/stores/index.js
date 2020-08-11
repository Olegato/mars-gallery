import { combineReducers, createStore,  applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
// import { composeWithDevTools } from 'redux-devtools-extension'

import picturesGalleryStore from 'stores/picturesGalleryStore/picturesGalleryRedux'
import startupSaga from './startupSaga'
import { fetchGalleryPictures } from 'stores/picturesGalleryStore/Sagas/fetchGalleryPictures'
const reducers = combineReducers({
  picturesGalleryStore
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(fetchGalleryPictures)

export default store
