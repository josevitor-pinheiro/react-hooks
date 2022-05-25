export function numberReducer(state, action) {
  switch (action.type) {
    case "number_add2":
      return { ...state, number: state.number + 2 };
    case "number_multiplayBy7":
      return { ...state, number: state.number * 7 };
    case "number_divideBy25":
      return { ...state, number: state.number / 25 };
    case "number_Int":
      return { ...state, number: parseInt(state.number) };
    default:
      return state;
  }
}
