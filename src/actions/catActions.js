export const fetchCats = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_CATS' });
    fetch('http://localhost:4000/db')
    .then(r => r.json())
    .then(rJSON => rJSON.images)
    .then(resp=>{
      return {type: 'FETCH_CATS', payload: resp}
    })
    .then(cats=>dispatch(cats))
  }
}
