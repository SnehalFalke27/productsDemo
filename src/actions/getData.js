
export function getDataReturn(data) {
    return {
      type: 'SUCCESS',
      payload: data
    };
  }

export function getData(data) {

  return function (dispatch){
    
    dispatch(getDataReturn(data));
  }
    
}



