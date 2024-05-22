import React from 'react';
import "../styles/App.scss";
import { useState, useEffect } from "react";
import getDataFromApi from "../services/api";
import Header from "./Header";
import FilterByName from "./FilterByName";
import CharacterList from "./CharacterList";
import Footer from "./Footer";

function App () {
	const [listCharacters, setListCharacters] = useState([])

	useEffect(() => {
		getDataFromApi().then((newArray) => {
			setListCharacters(newArray)
		})
	}, [])

	return (
		<>
			<Header />
			<FilterByName />
			<CharacterList listCharacters={ listCharacters } />
			<Footer />
		</>
	)
}

export default App;
