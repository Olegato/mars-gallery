const initialState = {
  error: false,
  loading: false,
  data: []
}

export const marsDataRequestAction = () => ({ type: 'MARS_DATA_REQUEST' })
export const marsDataErrorAction = (error) => ({ type: 'MARS_DATA_ERROR', error })
export const marsDataSuccessAction = (data) => ({ type: 'MARS_DATA_SUCCESS', data })

const marsGaleryReducer = (state = initialState, action) => {
  switch(action.type){
    case 'MARS_DATA_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'MARS_DATA_SUCCESS' :
      return {
        ...state,
        loading: false,
        data: action.data
      }
    case 'MARS_DATA_ERROR' :
    return {
      ...state,
      loading: false,
      error: action.error
    }
    default: return state
  }
}


export default marsGaleryReducer

