const initialState = {
  isLoading: true,
  images: [],
}


export default function reducer(state = initialState, action){
  const {type, images} = action;
  switch(type){
    case 'FETCH_IMAGES':
      return {...state, isLoading:true, images:images}
    default:
      return state
  }
}
