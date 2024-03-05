export const STATE = {
  firstNumber: "",
  secondNumber: "",
  operand: "",
  isOp: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_DIGIT":
      const currentNumber = state.isOp ? state.secondNumber : state.firstNumber;
      if (action.payload === "." && currentNumber.includes(".")) {
        return state;
      }

      if (currentNumber === "0" && action.payload !== ".") {
        return state;
      }

      return state.isOp
        ? { ...state, secondNumber: state.secondNumber + action.payload }
        : { ...state, firstNumber: state.firstNumber + action.payload };
    case "CHOOSE_OPERATION":
      return { ...state, isOp: true, operand: action.payload };
    case "CLEAR":
      return {
        firstNumber: "",
        secondNumber: "",
        operand: "",
        isOp: false,
        periodCount: 0,
      };
    case "DELETE":
      return state.isOp
        ? { ...state, secondNumber: state.secondNumber.slice(0, -1) }
        : { ...state, firstNumber: state.firstNumber.slice(0, -1) };
    case "EVALUATE":
      switch (state.operand) {
        case "+":
          var result = Number(state.firstNumber) + Number(state.secondNumber);
          return { ...state, operand: "", secondNumber: result };
        case "-":
          var result = Number(state.firstNumber) - Number(state.secondNumber);
          return { ...state, operand: "", secondNumber: result };
        case "*":
          var result = Number(state.firstNumber) * Number(state.secondNumber);
          return { ...state, operand: "", secondNumber: result };
        case "/":
          var result = Number(state.firstNumber) / Number(state.secondNumber);
          return { ...state, operand: "", secondNumber: result };
      }
    default:
      return state;
  }
};
