import { call } from 'redux-saga/effects'
import  { testRequest } from '../services/api'
import axios from 'axios'

export default function* helloSaga() {
  const response = yield call(axios.get, 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=YFqGlgVMINF5QD1AvpdyGXeaMm1nsI8r1BsSBVF4')
  console.log(response.data)
}
