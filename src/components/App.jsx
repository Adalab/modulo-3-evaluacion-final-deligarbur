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
	const [search, setSearch] = useState("")

	useEffect(() => {
		getDataFromApi().then((newArray) => {
			setListCharacters(newArray)
		})
	}, [])

	const filterCharacters = () => {
		return listCharacters.filter((item) => item.name.toLowerCase().includes(search))
	}

	const searchCharacter = (valueSearch) => {
		setSearch(valueSearch);
	}

	return (
		<>
			<Header />
			<FilterByName searchCharacter={ searchCharacter } search={ search } />
			<CharacterList listCharacters={ filterCharacters() } />
			<Footer />
		</>
	)
}

export default App;
