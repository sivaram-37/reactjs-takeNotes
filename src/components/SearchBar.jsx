import { useNoteContext } from "../contexts/NoteProvider";

export default function SearchBar() {
	const { searchInp, setSearchInp } = useNoteContext();

	function handleSubmit(e) {
		e.preventDefault();
		if (!searchInp) return;
	}

	return (
		<form className="search" onSubmit={handleSubmit}>
			<input
				className="search-input"
				type="text"
				value={searchInp}
				onChange={(e) => setSearchInp(e.target.value)}
				placeholder="🔍 search note..."
			/>
		</form>
	);
}
