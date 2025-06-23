import { useState } from "react"
import styles from './App.module.css'
export const App = () => {
	const [emai, setEmail] = useState('');
	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');

	return(
		<div className={styles.app}></div>
	)
}