import "../styles/App.scss";
import { useState, useEffect } from "react";
import getDataFromApi from "../services/api";

function App () {
	const [listCharacters, setListCharacters] = useState([])

	useEffect(() => {
		getDataFromApi().then((newArray) => {
			setListCharacters(newArray)
		})
	}, [])

	return (
		<>
			template
		</>
	)
}

export default App;
