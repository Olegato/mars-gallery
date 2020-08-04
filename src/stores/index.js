import { combineReducers, createStore,  applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
// import { composeWithDevTools } from 'redux-devtools-extension'

import marsGalleryStore from 'stores/marsGalleryStore/marsGalleryRedux'
import startupSaga from './startupSaga'
import { fetchMarsPhotos} from 'stores/marsGalleryStore/Sagas/fetchMarsPhotos'

const reducers = combineReducers({
  marsGalleryStore
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(fetchMarsPhotos)

export default store
