export const SET_TRUTH ='SET_TRUTH'
export const DELETE_TRUTH='DELETE_TRUTH'

export function setTruth(truth){
  return {
    type: SET_TRUTH,
    truth
   }
}

export function deleteTruth(brickID){
  return {
    type: DELETE_TRUTH,
    brickID
   }
}



export function getTruth() {
    return dispatch => {
      const fetchTruth = () => {
          return fetch('http://api.acme.international/fortune')
            .then(function(response) {
              if(response.status === 200) return response.json();
              else throw new Error('Something went wrong on api server!');
            })
            .catch(()=>fetchTruth())
      }

      const timeoutPromise = new Promise((resolve, reject) => {
        setTimeout(reject, 10000, 'request timed out');
      })

      return Promise
        .race([timeoutPromise, fetchTruth()])
        .then(
            json => dispatch(setTruth(json.fortune))
        )
        .catch(function(reason){
          console.log(reason);
          dispatch(setTruth(['A penny saved is a penny earned.']))
        })
    }
}
