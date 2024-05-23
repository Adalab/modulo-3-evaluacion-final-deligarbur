import "../styles/App.scss";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import getDataFromApi from "../services/api";
import Home from "./Home";
import CharacterDetail from "./CharacterDetail";
import PageNotFound from "./PageNotFound";

function App () {
	//Variables de estado
	const [listCharacters, setListCharacters] = useState([])
	const [search, setSearch] = useState("")

	//Fetch de Api
	useEffect(() => {
		getDataFromApi().then((newArray) => {
			setListCharacters(newArray)
		})
	}, [])







	//Filtro personajes
	const filterCharacters = listCharacters.filter((item) => {
		return item.name.toLowerCase().includes(search.toLowerCase());
	})

	//Validación búsqueda
	const noCharacter = filterCharacters.length === 0 ? `No hay ningún personaje que coincida con la palabra ${search}` : "";

	const searchCharacter = (valueSearch) => {
		setSearch(valueSearch);
	}

	//Detail character
	const getPosition = (idNumber) => {
		return listCharacters.find((item) => item.id === idNumber);
	}




	return (
		<>
			<Routes>
				<Route path="/" element={
					<Home searchCharacter={ searchCharacter } search={ search } listCharacters={ filterCharacters } noCharacter={ noCharacter } /> }>
				</Route>
				<Route path="/detail/:id" element={
					<CharacterDetail getPosition={ getPosition } /> } />
				<Route path="*" element={ <PageNotFound /> } />
			</Routes>
		</>
	)

}

export default App;
