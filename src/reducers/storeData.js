export default (state=[], action) => {
  switch(action.type) {
    case 'SET_DATA':
      return action.storeData;
    default:
      return state;
  }
}
