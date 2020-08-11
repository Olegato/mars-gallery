import { call, put } from 'redux-saga/effects'
import axios from 'axios'

import * as galleryActions from '../picturesGalleryRedux'

export function * fetchGalleryPictures () {
  const response = yield call(axios.get, 'https://pixabay.com/api/?key=17842117-0f3b04ef654c50523fb86bbe9')
  if(response.status === 200) {
    yield put(galleryActions.picturesDataSuccessAction(response.data))
  } else
    yield put(galleryActions.picturesDataErrorAction(response.problem))
}
