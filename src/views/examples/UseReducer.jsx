import React, { useReducer, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";

import { initialState, reducer } from "../../store";
import { numberAdd2, login } from "../../store/actions";

const UseReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [option, setOption] = useState(0);

  function enter(e) {
    if (e.keyCode === 13)
      return setOption(e.target.value), (state.number = option);
    else return setOption(e.target.value), console.log(e.target.value);
  }

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
      <div className="center">
        {state.user ? (
          <span className="text">{state.user.name}</span>
        ) : (
          <span className="text">Sem Usuário</span>
        )}
        <span className="text">{state.number}</span>
        <div>
          <button
            className="btn"
            onClick={() => login(dispatch, 'joão')}
          >
            login
          </button>
          <button
            className="btn"
            onClick={() => numberAdd2(dispatch)}
          >
            +2
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "number_multiplayBy7" })}
          >
            x7
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "number_divideBy25" })}
          >
            %25
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "number_Int" })}
          >
            Arredondar
          </button>
          <input type="number" className="btn" onKeyDown={(e) => enter(e)} />
        </div>
      </div>
    </div>
  );
};
export default UseReducer;
