import "../styles/App.scss";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import getDataFromApi from "../services/api";
import Home from "./Home";
import CharacterDetail from "./CharacterDetail";
import PageNotFound from "./PageNotFound";

function App () {
	const [listCharacters, setListCharacters] = useState([])
	const [search, setSearch] = useState("")

	useEffect(() => {
		getDataFromApi().then((newArray) => {
			setListCharacters(newArray)
		})
	}, [])

	const filterCharacters = listCharacters.filter((item) => {
		return item.name.toLowerCase().includes(search.toLowerCase());
	})

	const noCharacter = filterCharacters.length === 0 ? `No hay ningún personaje que coincida con la palabra ${search}` : "";


	const searchCharacter = (valueSearch) => {
		setSearch(valueSearch);
	}

	const getPosition = (position) => {
		const selectedCharacter = listCharacters[parseInt(position) - 1]
		return selectedCharacter
	}


	return (
		<>
			<Routes>
				<Route path="/" element={
					<Home searchCharacter={ searchCharacter } search={ search } listCharacters={ filterCharacters } noCharacter={ noCharacter } />
				}>
				</Route>
				<Route path="/detail/:position" element={ <CharacterDetail getPosition={ getPosition } /> } />
				{/* <Route path="*" element={ <PageNotFound /> } /> */ }

			</Routes>
		</>
	)

}

export default App;
