import "../styles/App.scss";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import getDataFromApi from "../services/api";
import Home from "./Home";
import CharacterDetail from "./CharacterDetail";
import PageNotFound from "./PageNotFound";

function App () {
	//Variables de estado
	const [listCharacters, setListCharacters] = useState([]);
	const [search, setSearch] = useState("");
	const [filter, setFilter] = useState("All");
	const [selectedSpecies, setSelectedSpecies] = useState("");

	//Fetch de Api
	useEffect(() => {
		getDataFromApi().then((newArray) => {
			setListCharacters(newArray)
		})
	}, [])

	//Filtro personajes
	const filterCharacters = () => {
		//Filtro de estado
		return listCharacters.filter((character) => {
			if (selectedSpecies === "Human") {
				return character.species === "Human"
			} else if (selectedSpecies === "Alien") {
				return character.species === "Alien"
			} else {
				return true // Mostrar todos los personajes si no hay ninguno seleccionado
			}
		})
			//Filtro 
			.filter((character) => {
				return filter === "All" ? true : character.status === filter
			})

			.filter((character) => {
				// Filtrar por nombre solo si search no está vacío
				return search === "" ? true : character.name.toLowerCase().includes(search.toLowerCase());
			});

	};

	//Validación búsqueda
	const noCharacter = filterCharacters === false ? `There is no character that matches the word ${search}` : "";

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
					<Home
						searchCharacter={ searchCharacter }
						search={ search }
						listCharacters={ filterCharacters() }
						noCharacter={ noCharacter }
						setFilter={ setFilter }
						filter={ filter }
						setSelectedSpecies={ setSelectedSpecies }
						selectedSpecies={ selectedSpecies } /> }>
				</Route>
				<Route path="/detail/:id" element={
					<CharacterDetail getPosition={ getPosition } /> } />
				<Route path="*" element={ <PageNotFound /> } />
			</Routes>
		</>
	)

}

export default App;
