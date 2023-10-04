import { createContext, useReducer, ChangeEvent } from 'react';

type StateType = {
	count: number;
	text: string;
};

const initialState: StateType = {
	count: 0,
	text: '',
};

const enum REDUCER_ACTION_TYPE {
	INCREMENT,
	DECREMENT,
	NEW_INPUT,
}

type ReducerAction = {
	type: REDUCER_ACTION_TYPE;
	payload?: string;
};

const reducer = (state: StateType, action: ReducerAction): StateType => {
	switch (action.type) {
		case REDUCER_ACTION_TYPE.INCREMENT:
			return { ...state, count: state.count + 1 };
		case REDUCER_ACTION_TYPE.DECREMENT:
			return { ...state, count: state.count - 1 };
		case REDUCER_ACTION_TYPE.NEW_INPUT: {
			return { ...state, text: action.payload ?? '' };
		}
		default:
			throw new Error();
	}
};

const useCounterContext = (initialState: StateType) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const increment = () => {
		dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT });
	};

	const decrement = () => {
		dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT });
	};

	const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch({ type: REDUCER_ACTION_TYPE.NEW_INPUT, payload: e.target.value });
	};

	return { state, increment, decrement, handleTextInput };
};
