export const setSearchField = (text) => ({
  type: 'CHANGE_SEARCH_FIELD',
  payload: text
})

export const requestFighters = () => (dispatch) => {
  dispatch({type: 'REQUEST_FIGHTER_PENDING'});
      fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) =>response.json())
      .then( data => dispatch({type: 'REQUEST_ROBOT_SUCCESS', payload: data}))
      .catch( error => dispatch({type: 'REQUEST_ROBOTS_FAILED', palyload: error}))
}
