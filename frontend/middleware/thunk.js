
const thunk = ({ dispatch, getState }) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch, getState);
  }
  return next(action);
};

// - MEMORIAL TO DUNK - //
// const dunk = (dispatch) => {
//   return (action) => {
//     return () => {
//       if (typeof action === 'function') {
//         return action(dispatch);
//       }
//       return next(action);
//     };
//   };
// };
// - END MEMORIAL - //

export default thunk;