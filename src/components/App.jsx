import '../styles/App.scss';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import getDataFromApi from '../services/api';
import Home from './Home';
import CharacterDetail from './CharacterDetail';

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

	const getPosition = (position) => {
		const selectedCharacter = listCharacters[parseInt(position) - 1]
		return selectedCharacter
	}

	return (
		<>
			<Routes>
				<Route path="/" element={
					<>
						<Home searchCharacter={ searchCharacter } search={ search } listCharacters={ filterCharacters() } />
					</>
				}>
				</Route>
				<Route path="/detail/:position" element={ <CharacterDetail getPosition={ getPosition } /> } />
			</Routes>
		</>
	)
}

export default App;
