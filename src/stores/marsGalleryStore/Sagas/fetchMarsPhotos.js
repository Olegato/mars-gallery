import { call, put } from 'redux-saga/effects'
import axios from 'axios'

import * as marsActions from '../marsGalleryRedux'

export function * fetchMarsPhotos () {
  const response = yield call(axios.get, 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=YFqGlgVMINF5QD1AvpdyGXeaMm1nsI8r1BsSBVF4')
  console.log(response)
  if(response.status === 200) {
    yield put(marsActions.marsDataSuccessAction(response.data))
  } else
    yield put(marsActions.marsDataErrorAction(response.problem))
}
