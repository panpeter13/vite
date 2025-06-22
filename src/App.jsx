import ReactLogo from './assets/react.svg?react';
import reactLogo from './assets/react.svg';
export const App = () => {
	return (
		<div>
			<h1>Hello world</h1>
			<ReactLogo />
      <img src={reactLogo} alt="react Logo" />
		</div>
	);
};
