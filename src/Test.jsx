import {useState} from "react";

function SlowComponent() {
	const words = Array.from({length: 600_00}, () => "WORD");
	return (
		<ul>
			{words.map((word, i) => (
				<li key={i}>
					{i}: {word}
				</li>
			))}
		</ul>
	);
}

function Counter({children}) {
	const [count, setCount] = useState(0);

	return (
		<div>
			<button onClick={() => setCount(c => c + 1)}>Increase {count}</button>
			{children}
		</div>
	);
}
export default function Test() {
	return (
		<div>
			<h1>Slow Counter??</h1>
			<Counter>
				<SlowComponent />
			</Counter>
		</div>
	);
}
