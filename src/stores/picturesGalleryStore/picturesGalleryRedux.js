const initialState = {
  error: false,
  loading: true,
  data: [],
  isCarouselActive: false
}

export const picturesDataRequestAction = () => ({ type: 'PICTURES_DATA_REQUEST' })
export const picturesDataErrorAction = (error) => ({ type: 'PICTURES_DATA_ERROR', error })
export const picturesDataSuccessAction = (data) => ({ type: 'PICTURES_DATA_SUCCESS', data })
export const picturesSwitchCarouselAction = () => ({ type: 'PICTURES_SWITCH_ACTIVE_CAROUSEL' })

const picturesGaleryReducer = (state = initialState, action) => {
  switch(action.type){
    case 'PICTURES_DATA_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'PICTURES_DATA_SUCCESS' :
      return {
        ...state,
        loading: false,
        data: action.data
      }
    case 'PICTURES_DATA_ERROR' :
    return {
      ...state,
      loading: false,
      error: action.error
    }
    case 'PICTURES_SWITCH_ACTIVE_CAROUSEL':
      return {
        ...state,
        isCarouselActive: !state.isCarouselActive

      }
    default: return state
  }
}


export default picturesGaleryReducer

