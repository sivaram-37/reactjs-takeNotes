/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";

const NoteContext = createContext();

function useLocalStorageState(initialArray, key) {
	const [value, setValue] = useState(() => {
		const storedValue = localStorage.getItem(key);
		return storedValue ? JSON.parse(storedValue) : initialArray;
	});

	useEffect(
		function () {
			localStorage.setItem(key, JSON.stringify(value));
		},
		[value, key]
	);

	return [value, setValue];
}

function NoteProvider({ children }) {
	const [notes, setNotes] = useLocalStorageState([], "notes");
	const [searchInp, setSearchInp] = useState("");
	const [showAddNote, setShowAddNote] = useState(false);

	return (
		<NoteContext.Provider
			value={{ notes, setNotes, showAddNote, setShowAddNote, searchInp, setSearchInp }}
		>
			{children}
		</NoteContext.Provider>
	);
}

function useNoteContext() {
	const context = useContext(NoteContext);
	return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { NoteProvider, useNoteContext };
