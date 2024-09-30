import { useNoteContext } from "../contexts/NoteProvider";

export default function NumResult() {
	const { notes } = useNoteContext();

	const totalNotes = notes.length;
	return <h3 className="numresult">Found {totalNotes} Notes</h3>;
}
