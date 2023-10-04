import Counter from './Counter';
import { CounterProvider } from './context/CounterContext';
import { initialState } from './context/CounterContext';

function App() {
	return (
		<>
			<h1>React Reducers</h1>
			<CounterProvider
				count={initialState.count}
				text={initialState.text}
			>
				<Counter>{(num: number) => <>Current Count: {num}</>}</Counter>
			</CounterProvider>
		</>
	);
}

export default App;
