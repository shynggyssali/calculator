import { useReducer, useState } from "react";
import { STATE, reducer } from "./useReducer";
import { ACTIONS } from "./actionTypes";

export default function Calculator() {
  const [state, dispatch] = useReducer(reducer, STATE);

  return (
    <>
      <div className="container">
        <div className="box">
          <div className="display">
            {state.isOp ? state.secondNumber : state.firstNumber}
          </div>
          <button
            onClick={() => dispatch({ type: ACTIONS.CLEAR })}
            className="two-btn"
          >
            AC
          </button>
          <button onClick={() => dispatch({ type: ACTIONS.DELETE })}>
            DEL
          </button>
          <button
            onClick={() =>
              dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: "/" })
            }
          >
            ÷
          </button>
          <button
            onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: 7 })}
          >
            7
          </button>
          <button
            onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: 8 })}
          >
            8
          </button>
          <button
            onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: 9 })}
          >
            9
          </button>
          <button
            onClick={() =>
              dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: "*" })
            }
          >
            *
          </button>
          <button
            onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: 4 })}
          >
            4
          </button>
          <button
            onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: 5 })}
          >
            5
          </button>
          <button
            onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: 6 })}
          >
            6
          </button>
          <button
            onClick={() =>
              dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: "-" })
            }
          >
            -
          </button>
          <button
            onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: 1 })}
          >
            1
          </button>
          <button
            onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: 2 })}
          >
            2
          </button>
          <button
            onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: 3 })}
          >
            3
          </button>
          <button
            onClick={() =>
              dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: "+" })
            }
          >
            +
          </button>
          <button
            onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: "." })}
          >
            .
          </button>
          <button
            onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: 0 })}
          >
            0
          </button>
          <button
            onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
            className="two-btn"
          >
            =
          </button>
        </div>
      </div>
    </>
  );
}
