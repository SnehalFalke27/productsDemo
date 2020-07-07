
let initialState = {
  data:[],
  error:false
};

export default function getDataInfo(state=initialState, action) {
 
  switch(action.type) {
   
    case 'SUCCESS':
      return {
        data: action.payload,
        error: false
      };
    default:
      return state;
  }
}
